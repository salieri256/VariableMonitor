interface row {
    key: string | number,
    value: string | number
}

interface rowdom {
    key: HTMLTableHeaderCellElement,
    value: HTMLTableHeaderCellElement
}

export class VariableMonitor {
    private dom: HTMLElement;
    private rowdoms: rowdom[];

    constructor(parent: HTMLElement) {
        const dom = document.createElement('table');
        const rowdoms: rowdom[] = [];
        
        for(let i = 0; i < 5; i++) {
            const tr = document.createElement('tr');
            const tdKey = document.createElement('th');
            const tdValue = document.createElement('th');

            tr.appendChild(tdKey);
            tr.appendChild(tdValue);
            dom.appendChild(tr);

            const rowdom: rowdom = {
                key: tdKey,
                value: tdValue
            };

            rowdoms[i] = rowdom;
        }

        rowdoms[0].key.innerHTML = 'key';
        rowdoms[0].value.innerHTML = 'value';

        dom.style.position = 'fixed';
        dom.style.bottom = '0px';

        parent.appendChild(dom);

        this.dom = dom;
        this.rowdoms = rowdoms;
    }

    setVariable(rows: row[]) {
        for(let i = 0; i < rows.length; i++) {
            this.rowdoms[ i+1 ].key.innerHTML = String(rows[i].key);
            this.rowdoms[ i+1 ].value.innerHTML = String(rows[i].value);
        }
    }
}