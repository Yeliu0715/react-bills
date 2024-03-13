export const billListData = {
    pay: [
      {
        type: 'foods',
        name: 'Foods',
        list: [
          { type: 'food', name: 'Food' },
          { type: 'drinks', name: 'drinks' },
          { type: 'dessert', name: 'Dessert' },
        ],
      },
      {
        type: 'taxi',
        name: 'Transportation',
        list: [
          { type: 'taxi', name: 'Taxi' },
          { type: 'longdistance', name: 'Longdis' },
        ],
      },
      {
        type: 'recreation',
        name: 'Recreation',
        list: [
          { type: 'bodybuilding', name: 'Fitness' },
          { type: 'game', name: 'Game' },
          { type: 'audio', name: 'Audio' },
          { type: 'travel', name: 'Travel' },
        ],
      },
      {
        type: 'daily',
        name: '日常支出',
        list: [
          { type: 'clothes', name: 'Clothes' },
          { type: 'bag', name: 'Bags' },
          { type: 'book', name: 'Book' },
          { type: 'promote', name: 'Promote' },
          { type: 'home', name: 'Home' },
        ],
      },
      {
        type: 'other',
        name: '其他支出',
        list: [{ type: 'community', name: 'utility bills' }],
      },
    ],
    income: [
      {
        type: 'professional',
        name: '其他支出',
        list: [
          { type: 'salary', name: 'Salary' },
          { type: 'overtimepay', name: 'Overtime' },
          { type: 'bonus', name: 'Bonus' },
        ],
      },
      {
        type: 'other',
        name: '其他收入',
        list: [
          { type: 'financial', name: 'Financial' },
          { type: 'cashgift', name: 'Cashgift' },
        ],
      },
    ],
  }
  
  export const billTypeToName = Object.keys(billListData).reduce((prev, key) => {
    billListData[key].forEach(bill => {
      bill.list.forEach(item => {
        prev[item.type] = item.name
      })
    })
    return prev
  }, {})