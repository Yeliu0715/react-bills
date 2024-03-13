import classNames from 'classnames'
import React, { useMemo, useState } from 'react'
import './index.scss'
import Icon from '../../../components/icons'

const DailyBill = (props) => {
  const [detailVisible, setDetailVisible] = useState(false)

  const dayResult = useMemo(() => {
    let expend = 0
    let income = 0
    props.data.forEach(item => {
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
  }, [props.data])
  return (
    <div className={classNames('dailyBill')}>
        <div className="header">
            <div className="dateIcon">
            <span className="date">{props.date}</span>
            {!detailVisible && <span className={classNames('arrow')} onClick={() => setDetailVisible(!detailVisible)}></span>}
            {detailVisible && <span className={classNames('arrow  expand')} onClick={() => setDetailVisible(!detailVisible)}></span>}
            </div>
            <div className="oneLineOverview">
            <div className="pay">
                <span className="type">Expend</span>
                <span className="money">{dayResult.expend}</span>
            </div>
            <div className="income">
                <span className="type">Income</span>
                <span className="money">{dayResult.income}</span>
            </div>
            <div className="balance">
                <span className="money">{dayResult.balance}</span>
                <span className="type">Balance</span>
            </div>
            </div>
        </div>
        {detailVisible &&         
        <div className="billList">
            {props.data.map(item => {
            return (
                <div className="bill" key={item.id}>
                    <div className="detail">
                        <div className="billType"> <Icon type={item.useFor}/> {item.useFor}</div>
                    </div>
                    <div className={classNames('money', item.type)}>
                        {item.money.toFixed(2)}
                    </div>
                </div>
            )
            })}
        </div>}
    </div>
  )
}
export default DailyBill