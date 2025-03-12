import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/ConfirmationPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


const ConfirmationPage = () => {
  const navigate = useNavigate()

  return (
    <div className='container-confirmation'>
      <div className='wrapper'>
        <FontAwesomeIcon icon={faCheck} className='tick'/>
        <h2>Bạn đã hoàn tất đặt sân!</h2>
        <p>
          Chúng tôi đã nhân được đơn đặt sân của bạn và sẽ xác nhận trong thời gian sớm nhất.
          Vui lòng check email của bạn để xem chi tiết thông tin đơn đặt sân của bạn.
        </p>
        <button className='btn' type='button' onClick={() => navigate('/')}>Quay lại trang chủ</button>
      </div>
    </div>
  )
}

export default ConfirmationPage