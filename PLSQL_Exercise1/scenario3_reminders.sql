BEGIN
    FOR l IN (
        SELECT CustomerName, DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan due for '
            || l.CustomerName
            || ' on '
            || l.DueDate
        );
    END LOOP;
END;
/