import { useEffect, useState } from 'react';
import { View, Panel, Header, HorizontalScroll, Group, Button, Text, Title, SimpleCell } from '@vkontakte/vkui';

const Home = ({dateAndData}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const dates = Object.keys(dateAndData);
  useEffect(() => {
    
  }, []);

  return (
    <View activePanel="horizontal">
      <Panel id="horizontal">
        <Group header={<Header mode="primary" style={{justifyContent: 'center'}}>Даты</Header>}>
          <HorizontalScroll showArrows getScrollToLeft={i => i - 120} getScrollToRight={i => i + 120}>
            <div style={{ display: 'flex', gap: '3%', margin: '3%'}}>
              {
				dates.map((item, index) => {
					return (
						<Button 
						mode={(currentIndex == index)?"primary":"secondary"} 
						onClick={()=>{
							setCurrentIndex(index);
						}}>
							{item}
						</Button>
					)
				})
			  }
            </div>
          </HorizontalScroll>
		  {
			dateAndData[dates[currentIndex]].map((item)=>{

				const time = Object.keys(item)[0];
				console.log(item)
				return (

					<SimpleCell>
						<Text onClick={(event)=>{
							const text = event.target.innerHTML
							var textField = document.createElement('textarea')
							textField.innerText = text
							document.body.appendChild(textField)
							textField.select()
							document.execCommand('copy')
							textField.remove()

						}}>{`${time}: ${item[time]}`}</Text>
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