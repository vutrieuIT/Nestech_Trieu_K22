export class Constants {
  rows;
  columns;
  count = 0;

  setRow(rows) {
    this.rows = rows;
  }

  getRow() {
    return this.rows;
  }

  setColumn(columns) {
    this.columns = columns;
  }

  getColumn() {
    return this.columns;
  }

  setCount(count) {
    this.count = count;
  }

  getCount() {
    return this.count;
  }
}
