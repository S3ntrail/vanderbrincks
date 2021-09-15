import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Card = () => {
  return(
    <div className="flex flex-wrap border-2 shadow rounded-lg">

      <div className="text-left p-4 w-3/4">
        
        <div>

          <h3 className="font-bold mb-4">
            Onderhoud
          </h3>

          <p>
            Lees hier over het onderhouden van je fiets
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