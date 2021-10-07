import React from 'react';
import { Panel, PanelHeader, Text, Header} from '@vkontakte/vkui';


import { } from '@vkontakte/vkui';

const ErrorPage = props => (
	<Panel id={props.id}>
		<PanelHeader style={{textAlign: 'center'}}>
		</PanelHeader>
		<Header mode="primary" style={{justifyContent: 'center'}} >Ошибка</Header>
		<Text style={{margin: '3%'}}>{props.error.errors[0].description}</Text>
	</Panel>
);

export default ErrorPage;
