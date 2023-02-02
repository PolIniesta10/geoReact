import React from 'react'
import { AiOutlineUnlock } from 'react-icons/ai';
import { AiOutlineLock } from 'react-icons/ai';
import { RiContactsBook2Line } from 'react-icons/ri';

export default function PlaceAdd(){
  return (
    <>
      <div className="container_add">
        <div className="add-box">
          <div className="left_add"></div>
          <div className="right_add">
            <h2 className='h2_add'>Places Add</h2>
            <form action="">
              <input type="text" className='field_add' placeholder="Name"/>
              <input type="text" className='field_add' placeholder="Latitude"/>
              <input type="text" className='field_add' placeholder="longitude"/>

              <div class="checkbox-container">

                <div class="checkbox-wrapper-16">
                  <label class="checkbox-wrapper">
                    <input type="checkbox" class="checkbox-input" />
                    <span class="checkbox-tile">
                      <span class="checkbox-icon">
                        <AiOutlineUnlock/>
                      </span>
                      <span class="checkbox-label">Public</span>
                    </span>
                  </label>
                </div>

                <div class="checkbox-wrapper-16">
                  <label class="checkbox-wrapper">
                    <input type="checkbox" class="checkbox-input" />
                    <span class="checkbox-tile">
                      <span class="checkbox-icon">
                        <AiOutlineLock/>
                      </span>
                      <span class="checkbox-label">Private</span>
                    </span>
                  </label>
                </div>

                <div class="checkbox-wrapper-16">
                  <label class="checkbox-wrapper">
                    <input type="checkbox" class="checkbox-input" />
                    <span class="checkbox-tile">
                      <span class="checkbox-icon">
                        <RiContactsBook2Line/>
                      </span>
                      <span class="checkbox-label">Contactos</span>
                    </span>
                  </label>
                </div>

              </div>
              <input type="file" className='file_add'/>
              <button className="btn_add">Create</button>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}