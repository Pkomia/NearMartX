// 6. TransactionHistory.js
import React from 'react';

function TransactionHistory() {
    const transactions = [
        { id: 1, date: '2023-12-01', amount: 250.0, customer: 'John Doe' },
        { id: 2, date: '2023-12-02', amount: 500.0, customer: 'Jane Smith' }
    ];

    return (
        <div>
            <h2>Transaction History</h2>
            <ul>
                {transactions.map((transaction) => (
                    <li key={transaction.id}>
                        {transaction.date} - {transaction.customer} - ${transaction.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionHistory;