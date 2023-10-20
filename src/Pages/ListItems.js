import React from "react"
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ItemVisibility from "../Components/ItemVisibility";

class ListItems extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        items: [
        {
          id: 1,
          img: 'image1.png',
          name: 'Blablabla',
          price: '500 000P',
          
        },
        {
          id: 2,
          img: 'image1.png',
          name: 'Blablabla',
          price: '500 000P',
          
        },
        {
          id: 3,
          img: 'image1.png',
          name: 'Blablabla',
          price: '500 000P',
          
        },
        {
          id: 4,
          img: 'image1.png',
          name: 'Blablabla',
          price: '500 000P',
          
        }
  
        ]
      }
    }
    render() {
        return (
            <div className="wrapper">
              <Header/>
              <ItemVisibility items={this.state.items} />
              <Footer/>
            </div>
          );
        }
    
}

export default ListItems