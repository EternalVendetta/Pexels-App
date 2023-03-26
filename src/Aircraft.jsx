// CSS
import './styles/Img.css';
import 'react-medium-image-zoom/dist/styles.css'
// Zoom
import Zoom from 'react-medium-image-zoom'

export const Aircraft = ({ img, onDownload }) => {
    return ( 
        <div>
        {
            img.map((elt, key) => {
                return(
                <div key={key} className='outter_container'>
                    <div className='img_container'>
                        <Zoom>
                            <img src={elt.src.medium} alt=''/>
                        </Zoom>
                    </div>
                    <section className='description_outter_container'>
                        <div className='description_inner_container'>
                            <h2>By: {elt.photographer}</h2>
                        </div>
                        <div className='download_container'>
                            <p>{elt.alt}</p>
                            <a 
                                className='download_btn btn' 
                                href="./logo.png"
                                onClick={onDownload}
                                download={'./logo.png'}
                            >
                                Download
                            </a>
                        </div>
                    </section>
                </div>
                )
            })
        }
        </div>
    )
}
