import React, { useState, useEffect } from 'react'
import './LienHe.css';
import axios from 'axios';
import { API_URL, TOKEN, USER_LOGIN } from '../../action/types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const LienHe = () => {
  return (
    <div class="contact">
      <div class="row map">
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3833.6894331735357!2d108.159118!3d16.081598!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218c4c88d048d%3A0x9c8f4443d90358f0!2zNTE5IEtpbmggRC4gVsawxqFuZywgSG_DoCBNaW5oLCBMacOqbiBDaGnhu4N1LCDEkMOgIE7hurVuZyA1NTAwMDA!5e0!3m2!1svi!2s!4v1652627470144!5m2!1svi!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

        </div>

        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7446.32029480922!2d105.888276!3d21.066265!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeb0d1b72da41df54!2zQ8O0bmcgVHkgVG5oaCBQYWxsZXQgTmjhu7FhIEFuIFBow7o!5e0!3m2!1svi!2s!4v1652627766659!5m2!1svi!2s" width={600} height={489} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

        </div>

        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          
        </div>
      </div>
      <div class="information-contactt">

        <div class="row">

          <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <h2>NHỰA AN PHÚ</h2>

            <div class="row">

              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <h5>ZALO</h5>
                <p>0945228146</p><br />
                <h5>EMAIL</h5>
                <p>nguyenvanhaidn2vn@gmail.com</p>
              </div>

              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <h5>PHONE</h5>
                <p>0945228146</p>
              </div>

            </div>

          </div>

          <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7 fulfill-information">
            <h2>Điền thông tin của bạn</h2>
            <input type="text" placeholder="Tên của bạn" /><br />
            <input type="text" name="" id="" placeholder="Địa chỉ email của bạn" /><br />
            <input type="text" name="" id="" placeholder="Thông điệp" /><br />
          </div>

        </div>

      </div>
    </div>
  );
}

export default LienHe;
