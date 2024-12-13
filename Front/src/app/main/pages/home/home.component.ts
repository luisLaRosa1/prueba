import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { UnsubcribeOnDestroy } from '../../components/general/unsubscribe-on-destroy';
import { IProduct, IProductResponse } from '../../providers/services/product.interface';
import { ProductService } from '../../providers/services/product.service';
import { FormBuilder, FormGroup } from '@angular/forms';
//import { HeaderService } from '../../providers/services/header/header.service';

@Component({
  selector: 'pmf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends UnsubcribeOnDestroy implements OnInit {
  data: Array<IProduct>;
  loading: boolean;

  noResultMessage: string = 'No se encontraron registros disponibles';
  newItem = { code: '', name: '', description: '', unitPrice: 0 };
  displayModal = false;
  filteredData: Array<IProduct>;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
    super();
  }

  ngOnInit(): void {
    this.loading = true;
    this.createForm();
    const get$ = this.productService
      .productGet()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((response: IProductResponse) => {
        this.data = response.data.product;
        this.filteredData = response.data.product;
      });
    this.arrayToDestroy.push(get$);
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      codeFilter: [null],
      nameFilter: [null],
    });
  }

  showModal() {
    this.displayModal = true;
  }

  hideModal() {
    this.displayModal = false;
  }

  search() {
    this.filteredData = this.data.filter(
      (item: any) =>
        item.id?.toString().includes(this.form.controls?.codeFilter?.value ?? "") &&
        item.name.includes(this.form.controls?.nameFilter?.value ?? ""),
    );
  }

  addItem() {
    this.data.push({ ...this.newItem });
    this.filteredData = [...this.data];
    this.newItem = { code: '', name: '', description: '', unitPrice: 0 };
    this.hideModal();
  }
}
