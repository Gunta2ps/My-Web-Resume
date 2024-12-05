import React from 'react'
const experiences = [
    {
        title: " IT Support",
        company: "ADVANCED SAFETY AND QUALITY SOLUTIONS",
        date: " MAR 2023 - JUN 2023",
        description: " Use SQL to set the config in requirement of the customer or change some point in the product with customer requriement",
    },
    {
        title: "Data Scientist & Front-End",
        company: "DEE DOT FARM",
        date: "OCT 2022-JAN 2023",
        description: "  Scraping data to make a database for a project by using Puppeteer and Scrappy. I use Django for making the website in the trial project",
    },
    {
        title: "Pricing & Data Analytics",
        company: "SIAM EXPRESS DELIVERY(DHL)",
        date: " 2021 - SEP 2022",
        description: "Data analysis of shipment, price, and income in the company by using Power BI and setting the price of shipping in all brach of the company.",
    },
]
function Experience() {
  return (
    <div className='pb-4'>
      <h2 className='my-20 text-center text-4xl'>Experience</h2>
      <div>
        {
            experiences.map((experience, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className='w-full lg:w-1/4'>
                        <p className='mb-2 text-sm text-stone-400'>{experience.date}</p>
                    </div>
                    <div className='w-full max-w-xl lg:w-3/4'>
                        <h3 className='mb-2 font-semibold'> {experience.title} at <span className='text-sm text-stone-500'>{experience.company}</span></h3>
                        <p className=''>{experience.description}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Experience
