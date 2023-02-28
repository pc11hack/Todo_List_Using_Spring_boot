import React from 'react'
import TitleRoundedIcon from '@mui/icons-material/TitleRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';





export const Try_java = () => {
  return (
    <div>
        {/* <!-- Button trigger modal --> */}
{/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button> */}

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Click me</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">

            {/* Modal content */}
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">What to do!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
                    {/* Modal Body */}
      <div class="modal-body">

      <form>
        <div className='firstdiv2'>
            <TitleRoundedIcon fontSize='small'/>
                <input className='input_user_name' type="text" id="name" aria-describedby="emailHelp" placeholder=" Enter Title"/>
        </div>

        <div className='seconddiv2'>
            <DescriptionRoundedIcon fontSize='small'/>
                <textarea  className='input_user_name' type="text" id="passw" placeholder=" Enter Description"/>
        </div>
       </form>
      </div>
      
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
