import "./styles.css"
import { FiCopy } from 'react-icons/fi'

const Output = ({ url, onCopy }) => {


    return (
        <div className='output'>
            <div className='url'>
                <p> {url} </p>
            </div>

            <div className='copy' onClick={onCopy}>
                <FiCopy />
            </div>
        </div>
    )
}

export default Output
