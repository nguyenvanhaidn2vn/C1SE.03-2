import React from 'react';
import './DonDatHangUserCT.css'
const DonDatHangUserCT = () => {
    return (
        <div>
            <div class="form-information-bill">
                <button type="button" class="btn btn-primary" data-toggle="modal"
                    data-target="#exampleModal">
                    FORM
                </button>

                <div class="modal fade" id="exampleModal" tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">ĐƠN
                                    HÀNG</h5>
                                <button type="button" class="close"
                                    data-dismiss="modal"
                                    aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body bill">
                                <div class="title">
                                    <h5>Thông tin người mua</h5>
                                </div>
                                <div class="choosen-sex">
                                    <input type="radio" name="sex" id="" /><label for="">Anh</label>
                                    <input type="radio" name="sex" id="" /><label for="">Chị</label>
                                </div>
                                <div class="information-user">
                                    <input class="name" type="text" placeholder="Họ và tên" />
                                    <input class="phone" type="text" name="" id="" placeholder="Số điện thoại" />
                                    <input type="text" name="" id=""
                                        placeholder="Địa chỉ email (Không bắt buộc)" /><br />
                                    <input class="locate" type="text" name="" id=""
                                        placeholder="Địa chỉ nhận hàng (Không bắt buộc)" /><br />
                                    <input class="note" type="text" name="" id=""
                                        placeholder="Ghi chú đơn hàng (Không bắt buộc)" /><br />
                                </div>
                                
                                <div class="order">
                                    <button data-dismiss="modal">ĐẶT HÀNG NGAY</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DonDatHangUserCT;

