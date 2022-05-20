import React,{useState} from 'react'
import {
  Badge,
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Pagination,
  Row,
  Table,
} from 'react-bootstrap';
import { FaTrashAlt, FaEdit, FaPlus } from 'react-icons/fa';
import Img1 from '../../assets/1.jpg'
import Img2 from '../../assets/2.png'
import Img3 from '../../assets/3.png'
import Img4 from '../../assets/4.jpg'
import './ShowProducts.css'
import Layout from '../Layout/Admin'
const PRODUCT_LIST = [
  {
    id: '71309001',
    name: 'Thùng nhựa 1',
    image: Img1,
    quantity: 30,
    isStock: true,
    price: '5.600.000',
    category: '	Thùng nhựa',
  },
  {
    id: '71309002',
    name: 'Thùng nhựa 2',
    image: Img2,
    quantity: 40,
    isStock: false,
    price: '5.600.000',
    category: '	Thùng nhựa',
  },
  {
    id: '71309003',
    name: 'Thùng nhựa 3',
    image: Img3,
    quantity: 50,
    isStock: true,
    price: '5.600.000',
    category: '	Thùng nhựa',
  },
  {
    id: '71309004',
    name: 'Thùng nhựa 4',
    image: Img4,
    quantity: 60,
    isStock: true,
    price: '5.600.000',
    category: '	Thùng nhựa',
  },
  {
    id: '71309005',
    name: 'Thùng nhựa 5',
    image: Img4,
    quantity: 70,
    isStock: true,
    price: '5.600.000',
    category: '	Thùng nhựa',
  },
];

function ShowProducts() {

  const [product,setProduct] = useState({
    title:'',
    price:0,
    image: null,
    colors: [],
    size : []
  });

  const onChange = (event)=>{
    setProduct({...product,[event.target.name]:event.target.value});
  }
  return (
    <Layout>
      <Container>
        <Row className="my-5">
          <Col xs={8}>
            <div className="d-flex gap-2 align-items-center">
              <Button data-toggle="modal" data-target="#createProducts">
                <FaPlus /> Tạo mới sản phẩm
              </Button>
              {/* <div className='form-information-bill'> */}
              <div class="modal fade" id="createProducts" tabindex="-1"
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
                    <div class="modal-body create-product">
                      <div class="title">
                        <h5>Thông tin sản phẩm</h5>
                      </div>
                      <div class="information-product">
                        <label htmlFor="">Tên sản phẩm: </label><input class="name" type="text" name="title" onChange={onChange}/><br />
                        <label htmlFor="">Giá: </label><input class="price" type="text" id="" name="price" />
                        <label htmlFor="">Hình ảnh: </label><input class="img" type="file" name="" id=""  /><br />
                        <label htmlFor="">Màu sắc: </label><br/><input class="color" type="checkbox" name="" id="" /><label htmlFor="" style={{color: "red"}}>Đỏ</label><input class="note" type="checkbox" name="" id="" /><label htmlFor="">Đen</label><input class="note" type="checkbox" name="" id="" /><label htmlFor="" style={{color: "yellow"}}>Vàng</label><br />
                        <label htmlFor="">Kích thước: </label><br/><input class="size" type="checkbox" /><label htmlFor="">1200x1000x145</label><input class="size" type="checkbox" /><label htmlFor="">1200x1000x145</label><br />
                        <label htmlFor="">Mô tả: </label><input class="description" type="text" /><br />
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary"
                        data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Tạo sản phẩm</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </Col>

          <Col xs={4}>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="me-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Col>
        </Row>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Mã sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>Ảnh</th>
              <th>Số lượng</th>
              <th>Tình trạng</th>
              <th>Giá tiền</th>
              <th>Danh mục</th>
              <th>Chức năng</th>
            </tr>
          </thead>

          <tbody>
            {PRODUCT_LIST.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>
                  <img src={product.image} alt="" width={100} />
                </td>
                <td>{product.quantity}</td>
                <td>
                  {product.isStock && <Badge bg="success">Còn hàng</Badge>}
                  {!product.isStock && <Badge bg="danger">Hết hàng</Badge>}
                </td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>

                  <button class="btn btn-primary btn-sm trash" type="button" title="Xóa" onclick="myFunction(this)"><FaTrashAlt /> <i class="fas fa-trash-alt"></i>
                  </button>
                  <button class="btn btn-primary btn-sm edit" type="button" title="Sửa" data-toggle="modal"
                    data-target="#exampleModal">
                    <FaEdit /> <i class="fas fa-edit" ></i></button>
                  <div className='form-information-bill'>
                    <div class="modal fade" id="exampleModal" tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit sản phẩm</h5>
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
                              <input class="name" type="text" name="title" placeholder="Tên Sản phẩm" />
                              <input class="price" type="text" name="" id="" placeholder="Giá" />
                              <input type="text" name="" id=""
                                placeholder="Category" /><br />
                              <input class="locate" type="text" name="" id=""
                                placeholder="Địa chỉ nhận hàng (Không bắt buộc)" /><br />
                              <input class="note" type="text" name="" id=""
                                placeholder="Ghi chú đơn hàng (Không bắt buộc)" /><br />
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
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className="d-flex justify-content-end">
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>

            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </Container>
    </Layout>
  );
}

export default ShowProducts;
