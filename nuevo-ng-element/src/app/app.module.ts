import { BrowserModule } from "@angular/platform-browser";
import { Injector, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { createCustomElement } from "@angular/elements";
import { APP_BASE_HREF } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { DemoelementComponent } from "./elementsBuilders/demoelement/demoelement.component";

@NgModule({
  declarations: [AppComponent, DemoelementComponent],
  imports: [BrowserModule, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
  bootstrap: [],
  entryComponents: [DemoelementComponent],
})
export class AppModule {
  injector: Injector;
  constructor(injector: Injector) {
    this.injector = injector;
  }
  ngDoBootstrap() {
    if (!customElements.get("app-demoelement")) {
      const el = createCustomElement(DemoelementComponent, {
        injector: this.injector,
      });
      customElements.define("app-demoelement", el);
    }
  }
}
