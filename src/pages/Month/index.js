import { NavBar, DatePicker } from 'antd-mobile'
import React, { useState, useMemo, useEffect} from 'react'
import {useSelector} from 'react-redux'
import './index.scss'
import dayjs from 'dayjs'
import _, { set } from 'lodash'

import DailyBill from './Day'

const Month = () => {

  const billList = useSelector(state => state.bill.billList)
    
  const [dateVisible, setDateVisible] = useState(false)
  const [currentDate, setCurrentDate] = useState(dayjs().format('YYYY-MM'))
  const [currentMonthData, setCurrentMonthData] = useState([])

  const handleComfirm = (date) => {
    setDateVisible(false)
    const currentMonth = dayjs(date).format('YYYY-MM')
    setCurrentDate(currentMonth)
    setCurrentMonthData(monthList[currentMonth] || [])
  }

  //  Group bill list by month
  const monthList = useMemo(() => {
    return _.groupBy(billList, (item) => {
      return dayjs(item.date).format('YYYY-MM')
    })
  }, [billList])

  const dayList = useMemo(() => {
    return _.groupBy(currentMonthData, (item) => {
      return dayjs(item.date).format('YYYY-MM-DD')
    })
  }, [currentMonthData])

  // Calculate the monthly result by grouped bill list
  const monthResult = useMemo(() => {
    let expend = 0
    let income = 0
    currentMonthData.forEach(item => {
      if (item.type === 'pay') {
        expend += item.money
      } else {
        income += item.money
      }
    })
    return {
        expend : expend,
        income : income,
        balance : income + expend
    }
  }, [currentMonthData])

  useEffect(() => {
    const nowDate = dayjs().format('YYYY-MM')
    setCurrentMonthData(monthList[nowDate] || [])
  },[monthList])

  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        Monthly Bill
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date">
            <span className="text">
              {currentDate}
            </span>
            {!dateVisible && <span className='arrow ' onClick={() => setDateVisible(true)}></span>}
            {dateVisible && <span className='arrow expand'></span>}
          </div>
          {/* 统计区域 */}
          <div className='twoLineOverview'>
            <div className="item">
              <span className="money">{monthResult.expend}</span>
              <span className="type">Expend</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.income}</span>
              <span className="type">Income</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.balance}</span>
              <span className="type">Balance</span>
            </div>
          </div>
          <DatePicker
            className="kaDate"
            title="Date"
            precision="month"
            visible={dateVisible}
            onCancel={() => setDateVisible(false)}
            onConfirm={handleComfirm}
            onClose={() => setDateVisible(false)}
            max={new Date()}
          />
        </div>
        {dayList && Object.keys(dayList).map((key) => {
          return (
            <DailyBill key={key} date={key} data={dayList[key]} />
          )
        })}
      </div>
    </div >
  )
}

export default Month