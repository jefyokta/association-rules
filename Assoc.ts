export class X {
    public transactions:any[][]
    constructor(transactions:any[][]) {
        this.transactions = transactions;
    }
    support(...items:string[]):number {
        let count = 0;
        this.transactions.forEach((t) => {
            if (items.every((i) => t.includes(i))) {
                count += 1;
            }
        });
        return count / this.transactions.length;
    }

    confidence(antendence:any[], consequence:any[]):number {
        return (
            this.support(...antendence, ...consequence) /
            this.support(...antendence)
        );
    }
    lift(antendence:any[], consequence:any[]) :number{
        return (
            this.support(...antendence, ...consequence) /
            (this.support(...antendence) * this.support(...consequence))
        );
    }
    
}
