import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Card = props => {
  return(
    <div className="flex flex-wrap border-2 shadow rounded-lg cursor-pointer transform transition duration-500 hover:scale-110 hover:shadow-xl">

      <div className="text-left p-4 w-3/4">
        
        <div>

          <h3 className="font-bold mb-4">
            {props.title}
          </h3>

          <p>
            {props.description}
          </p>
        </div>

      </div>

      <div className="w-1/4">

        <div className="m-10">
          <FontAwesomeIcon 
            icon={faArrowRight}

            className="fa-sm"
          >
          </FontAwesomeIcon>
        </div>
          
      </div>

      

    </div>
  )
}

export default Card