import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import productImg from "../../Assets/images/clubB.jpg";
import { cartBooks } from "../../components/Redux/actions/bookActions";
const Cart = () => {
  const books = useSelector((state) => state.cartBooks.cartBooks)
  const dispatch = useDispatch()

  const [val, setVal] = useState(1)
  let subtotal;
  const user = useSelector((state) => state?.newUser?.user)
  const userId = user?._id
  // dispatch(cartBooks
  useEffect(() => {
    if (userId) {
      axios.get(`https://book-shelf-webapp.herokuapp.com/get-cart-data?id=${userId}`).then(data => dispatch(cartBooks(data.data.user_cart)))
    }
  }, [books])
  const sub = books?.map(book => book.book.book_price * book.qnt)
  subtotal = sub.reduce((a, b) => a + b, 0)

  return (
    <div className="pt-[60px] md:pt-[80px]  pb-[60px] md:pb-[80px] lg:pb-[120px]  ">

      <p className="text-5xl text-center mb-5 flex justify-center">My Cart <span><MdShoppingCart className='text-5xl text-primary ' /></span></p>
      <div className="container m-auto ">
        <div className="w-full">
          <div class="overflow-auto  h-[460px]">
            <table class="table w-full ">
              <thead>
                <tr>
                  <th className="rounded-none">products</th>
                  <th>name</th>
                  <th>price</th>
                  <th>quentity</th>
                  <th>subtotal</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody className="">
                {books?.map(book => <tr>
                  <td className="border-[#e1e2e6]">
                                    <div className="product gap-2">

                                        <div class="avatar">
                                            <div class="w-20 rounded">
                                                <img src={book.book.book_cover_photo_url} />
                                            </div>
                                        </div>
                                       
                                    </div>
                                </td>
                                <td>
                                <div className=" ">
                                            <h3 className="text-[18px] capitalize text-[#00124E] font-semibold">
                                                {book.book.book_title} 

                                            </h3>
                                            <p>By Author name</p>
                                        </div>
                                </td>
                  <td className="text-[16px] border-[#e1e2e6] text-black">
                    ${book.book.book_price}
                  </td>
                  <td className="border-[#e1e2e6]">
                    <div className="flex">
                      <button className="bg-[#f9f9fd] w-[40px] h-[40px] flex items-center justify-center rounded-none border-[#e1e2e6] border-solid border text-black" >
                        +
                      </button>
                      <input
                        type="text"
                        value={book.qnt}

                        class="input  w-[50px] h-[40px] max-w-xs rounded-none text-center border-[#e1e2e6] border-solid border-y-1 border-x-0 text-black"
                      />
                      <button className="bg-[#f9f9fd] w-[40px] h-[40px] flex items-center justify-center rounded-none border-[#e1e2e6 border-solid border text-black">
                        -
                      </button>
                    </div>
                  </td>
                  <td className="text-[16px] text-black border-[#e1e2e6]">
                    ${book.book.book_price * book.qnt}
                  </td>
                  <td className="border-[#e1e2e6]">
                    <button className="btn btn-error">delete</button>
                  </td>
                </tr>)}

              </tbody>
            </table>
          </div>
          <div className="flex justify-between border-t-[1px] border-[#e1e2e6] pt-2">
            <div className="gap-2 flex">
              <button className="btn btn-primary text-white">
                update cart
              </button>
              <button className="btn btn-primary text-white">
                Continue shoping
              </button>
            </div>
            <NavLink to='/checkout'>
              <button className="btn btn-primary text-white mt-16">
                Prossed to checkout
              </button>
            </NavLink>
          </div>
        </div>
        <div className="w-4/12 ml-auto mt-4">
          <div className="cart_summery  px-8">
            <h4 className="text-black text-[24px] capitalize font-medium mb-4">
              Order Summary
            </h4>
            <div className="">
              <div className="flex justify-between mb-3">
                <h5 className="text-black text-[18px] font-medium">Subtotal</h5>
                <p>${subtotal}</p>
              </div>
              <div className="flex justify-between mb-3">
                <h5 className="text-black text-[18px] font-medium">
                  Shiping charge
                </h5>
                <p>+ USD 75.35</p>
              </div>
              <div className="flex justify-between mb-3">
                <h5 className="text-black text-[18px] font-medium">Discount</h5>
                <p>- USD 75.35</p>
              </div>
              <div className="flex justify-between border-t-[1px] border-[#e1e2e6] pt-2 mt-3 items-center">
                <h5 className="text-black text-[18px] font-medium">
                  Total (Incl. VAT)
                </h5>
                <p>USD $1324.35</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
