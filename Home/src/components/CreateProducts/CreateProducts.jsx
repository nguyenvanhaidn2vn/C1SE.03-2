import React,{useState} from 'react';
import './CreateProducts.css'
const CreateProducts = () => {
    
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
                                <h5 class="modal-title" id="exampleModalLabel">TẠO SẢN PHẨM</h5>
                                <button type="button" class="close"
                                    data-dismiss="modal"
                                    aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body bill">
                                <div class="title">
                                    <h5>Thông tin sản phẩm</h5>
                                </div>
                               
       
                                <div class="information-user">
                                    <input class="name" type="text" placeholder="Tên Sản phẩm" />
                                    <input class="price" type="text" name="" id="" placeholder="Giá" />
                                    <input type="text" name="" id=""
                                        placeholder="Category" /><br />
                                    <input class="locate" type="text" name="" id=""
                                        placeholder="Địa chỉ nhận hàng (Không bắt buộc)" /><br />
                                    <input class="note" type="text" name="" id=""
                                        placeholder="Ghi chú đơn hàng (Không bắt buộc)" /><br />
                                </div>
                                <div class="total">
                                    <label for="" class="tittle-money">Tổng: </label>
                                    <label for="" class="total-money">0đ</label>
                                </div>
                                <div class="order">
                                    <button data-dismiss="modal">ĐẶT HÀNG NGAY</button>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary"
                                    data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save
                                    changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateProducts;

