import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items;
  formcontrol;
  constructor(
    private cartService: CartService,
    private formbuilder: FormBuilder
  ) {
    this.formcontrol = this.formbuilder.group({
      name: "",
      address: ""
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
  onSubmit(cartData) {
    this.items = this.cartService.clearCart();
    this.formcontrol.reset();
    console.warn("Your order has been submitted", cartData);
  }
}
