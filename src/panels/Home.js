import { useEffect, useState, Fragment } from 'react';
import { View, Panel, Header, PanelHeader, HorizontalScroll, Group, Button, Text, SimpleCell } from '@vkontakte/vkui';

const Home = () => {
  const [dateAndData, setDateAndData] = useState({'29.09.2021': ['Круть', 'Я хочу туда попасть'],
  												  '30.09.2021': ['Круть крутетская!'], 
												  '31.09.2021': ['Ахуеть'], 
												  '1.10.2021': [''], 
												  '2.10.2021': [''], 
												  '3.10.2021': [''], 
												  '4.10.2021': [''], 
												  '5.10.2021': ['']});
  const [currentIndex, setCurrentIndex] = useState(0)
  const dates = Object.keys(dateAndData);
  useEffect(() => {
    
  }, []);

  return (
    <View activePanel="horizontal">
      <Panel id="horizontal">
        <PanelHeader style={{textAlign: 'center'}}>События</PanelHeader>
        <Group header={<Header mode="secondary" style={{justifyContent: 'center'}}>Даты</Header>}>
          <HorizontalScroll showArrows getScrollToLeft={i => i - 120} getScrollToRight={i => i + 120}>
            <div style={{ display: 'flex', gap: '3%', margin: '3%'}}>
              {
				dates.map((item, index) => 
				  {
					return (
						<Button mode={(currentIndex == index)?"primary":"secondary"} onClick={()=>{setCurrentIndex(index)}}>{item}</Button>
					)
				  })
			  }
            </div>
          </HorizontalScroll>
		  {
			dateAndData[dates[currentIndex]].map((item)=>{
				console.log(item)
				return (

					<SimpleCell>
						<Text>{item}</Text>
					</SimpleCell>
				)
			})

		


			}
        </Group>
      </Panel>
    </View>
  );
};

export default Home