import React from 'react'
import "../DonDatHangUser/DonDatHangUser.css"
const DonDatHangUser = () => {
    return (
        <div>
            <div class="container bill">
            <div class="information-user">
                <image
                    src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-1/278332410_3218440328481967_6235711196857118439_n.jpg?stp=dst-jpg_p160x160&_nc_cat=105&ccb=1-6&_nc_sid=7206a8&_nc_ohc=OvbVHPaXwjAAX96IEEc&_nc_ht=scontent.fdad1-2.fna&oh=00_AT8SdHSVx5xnV0WWw87IU4BgBaCcKUYgctaZSYOwSo-_Kw&oe=6285090B"
                    alt=""/>
                <label for="">Van Hai</label>
            </div>
            <div class="information-bill">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ĐƠN HÀNG</th>
                            <th scope="col">NGÀY</th>
                            <th scope="col">TÌNH TRẠNG</th>
                            <th scope="col">TỔNG</th>
                            <th scope="col">CÁC THAO TÁC</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">#2369</th>
                            <td>23/08/2000</td>
                            <td>Đang xử lý</td>
                            <td>200.000đ</td>
                            <td><button>XEM</button></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
}

export default DonDatHangUser;
