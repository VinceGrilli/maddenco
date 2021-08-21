import React from "react"
import { Container } from "reactstrap"
import { HeaderItem } from "./bannerHelper"
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa"
import NumberFormat from "react-number-format"

let Banner = ({ title, phone, address }) => {
  const phone_url = "tel:" + phone.replace(/ /g, "")
  return (
    <div className="bg-light">
      <Container>
        <div className="d-flex py-2 align-items-center">
          <div className="d-flex mr-auto">
            <span className="d-none d-sm-inline font-weight-bold">{title}</span>
            <HeaderItem
              text={phone}
              type="phone"
              Icon={FaPhone}
              url={phone_url}
              klass="d-sm-none"
            >
              <NumberFormat
                value={phone}
                displayType={"text"}
                format="### ### ####"
              />
            </HeaderItem>
          </div>
          <div className="d-flex">
            <HeaderItem
              text={address}
              type="address"
              Icon={FaMapMarkerAlt}
              url="/contact"
              klass="d-lg-flex d-none mr-3"
            />
            <HeaderItem
              text={phone}
              type="phone"
              Icon={FaPhone}
              url={phone_url}
              klass="d-sm-flex d-none mr-3"
            >
              <NumberFormat
                value={phone}
                displayType={"text"}
                format="### ### ####"
              />
            </HeaderItem>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner
