import React, { Component } from 'react';

class Gallery extends Component {
    render(){
        let noImage = 'https://cdn4.iconfinder.com/data/icons/solid-part-6/128/image_icon-512.png';

        return(
            <div>
                {
                    this.props.items.map((item, index) => {
                        let {title, imageLinks, infoLink} = item.volumeInfo;
                        return(
                            <a 
                                key={index} 
                                className="book"
                                href={infoLink}
                                target="_blank"
                            >
                                <img 
                                    src={imageLinks !== undefined ? imageLinks.thumbnail : noImage} 
                                    alt={title}
                                    className="book-img"
                                />
                                <div className="book-title">
                                    {title}
                                </div>
                                
                                
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

export default Gallery;