import "./Dashboard.css";
import { PiSteeringWheelBold } from 'react-icons/pi';
import { IoCarSportSharp } from 'react-icons/io5';
import { BsFillFuelPumpFill } from 'react-icons/bs';
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardImage,
  CCardTitle,
  CCardText,
  CCardSubtitle,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import { CChartLine } from '@coreui/react-chartjs';
import { getStyle, hexToRgba } from '@coreui/utils';
import CIcon from '@coreui/icons-react';
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons';
import ReactImg from 'src/assets/images/car.jpeg';
import avatar1 from 'src/assets/images/avatars/1.jpg';
import avatar2 from 'src/assets/images/avatars/2.jpg';
import avatar3 from 'src/assets/images/avatars/3.jpg';
import avatar4 from 'src/assets/images/avatars/4.jpg';
import avatar5 from 'src/assets/images/avatars/5.jpg';
import avatar6 from 'src/assets/images/avatars/6.jpg';
import WidgetsBrand from '../widgets/WidgetsBrand';
import WidgetsDropdown from '../widgets/WidgetsDropdown';
import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch('http://localhost:3000/api/products')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <>
      <WidgetsDropdown />
      <div></div>
      <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
        {posts.map(post => (
          <CCol xs key={post.title}>
            <div class="card2">
              <div class="imgBx2">
                <img src={post.image} alt={post.title} />
              </div>
              <div class="content">
                <div class="details">
                  <h2>
                    {post.title}
                    <br />
                    <span>{post.price}</span>
                  </h2>
                  <div class="data">
                    <h3>
                      <PiSteeringWheelBold size={15} color="red" />
                      <br />
                      <span>Automatic</span>
                    </h3>
                    <h3>
                      <IoCarSportSharp size={20} color="red" />
                      <br />
                      <span>Model: 2023</span>
                    </h3>
                    <h3>
                      <BsFillFuelPumpFill size={12} color="red" />
                      <br />
                      <span>Hybrid</span>
                    </h3>
                  </div>
                  <div class="actionBtn">
                    <button>Add to cart</button>
                    <button>Details</button>
                  </div>
                </div>
              </div>
            </div>
          </CCol>
        ))}
      </CRow>
      {/* <button onClick={getData}>hassan</button> */}
    </>
  )
}

export default Dashboard;
