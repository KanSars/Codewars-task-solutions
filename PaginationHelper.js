class PaginationHelper {
  collection = [];
  itemsPerPage;

  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;

  }

  itemCount() {
    return this.collection.length;
  }

  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  pageItemCount(pageIndex) {
    if ((pageIndex < 0) || (pageIndex > (this.pageCount() - 1))) {
      return -1;
    }
    if ((pageIndex === 0) || ((pageIndex + 1) * this.itemsPerPage) < this.collection.length) {
      return Math.min(this.itemCount(), this.itemsPerPage);
    } else {
      return this.collection.length - (pageIndex * this.itemsPerPage)
    }
  }

  pageIndex(itemIndex) {
    if ((itemIndex < 0) || (itemIndex > (this.collection.length - 1))) {
      return (-1);
    }
    return (Math.ceil((itemIndex + 1) / this.itemsPerPage) - 1);
  }
}