import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import ErrorPage from './panels/Error';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [dateAndData, setDateAndData] = useState({'Дата': [{'Время': 'Событие 1'}]});
	const url_data = 'https://vk-data-keep.herokuapp.com';


	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function getData()
		{
			try
			{
				// throw new Error('Server not found')
				const data = await fetch(`${url_data}/data/all`);
				const json = await data.json();
				console.log(typeof json);
				setDateAndData(JSON.parse(json));
				console.log(`${url_data}/data/all`)
			}
			catch(error)
			{
				setDateAndData({'errors': [{'description': error.message}]});
				setActivePanel('error');

			}
			setPopout(null);

		}

		getData();

	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout}>
					<Home id='home' dateAndData={dateAndData}/>
					<ErrorPage id='error' error={dateAndData}/>
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
