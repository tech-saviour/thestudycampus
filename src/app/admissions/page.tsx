import AboutUsSection from '@/components/AboutUsSection'
import AdmissionEnquirySection from '@/components/AdmissionEnquirySection'
import PreschoolPrograms from '@/components/PreschoolPrograms'
import React from 'react'

const page = () => {
  return (
    <div className="bg-[#fff7f0] -mt-16 ">
      <AdmissionEnquirySection/>
      <PreschoolPrograms/>
      <AboutUsSection/>
    </div>
  )
}

export default page
