/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-soda',
  templateUrl: './soda.component.html',
  styleUrls: ['./soda.component.scss']
})
export class SodaComponent implements OnInit {
  title = 'SodaComponent';

  constructor(
    private cdr: ChangeDetectorRef,
    public app: AppComponent
  ) {
    console.log(`[${this.title}#constructor]`);
  }

  ngOnInit(): void {
    console.log(`[${this.title}#ngOnInit]`);
  }

  ngOnDestroy(): void {
    console.log(`[${this.title}#ngOnDestroy]`);
  }

  updateView() {
    console.log(`[${this.title}#updateView]`);

    this.cdr.detectChanges;
    this.app.updateView(this.title);
  }

  async redirectTo(url: any) {
    await this.app.redirectTo(url, this.title);

    this.updateView();
  }

  updateSodaFillHeight(submit = false) {
    console.log(`[${this.title}#updateSodaFillHeight] submit`, submit);

    const sodaFormUsername = 'admin';
    console.log(`[${this.title}#updateSodaFillHeight] sodaFormUsername`, sodaFormUsername);

    const sodaFormPassword = '123';
    console.log(`[${this.title}#updateSodaFillHeight] sodaFormPassword`, sodaFormPassword);

    const sodaForm = document.querySelector('.sodaForm') as HTMLDivElement;
    console.log(`[${this.title}#updateSodaFillHeight] sodaForm`, sodaForm);

    const sodaInputUsername = document.getElementById('soda-username') as HTMLInputElement;
    console.log(`[${this.title}#checkFormData] sodaInputUsername`, sodaInputUsername);

    const sodaInputPassword = document.getElementById('soda-password') as HTMLInputElement;
    console.log(`[${this.title}#checkFormData] sodaInputPassword`, sodaInputPassword);

    const sodaSubmit = document.getElementById('soda-submit') as HTMLInputElement;
    console.log(`[${this.title}#checkFormData] sodaSubmit`, sodaSubmit);

    const rawMinimumSodaFillHeight = getComputedStyle(sodaForm).getPropertyValue('--sodaBeforeInitialHeight');
    console.log(`[${this.title}#updateSodaFillHeight] rawMinimumSodaFillHeight`, rawMinimumSodaFillHeight);

    const minimumSodaFillHeight = parseFloat(rawMinimumSodaFillHeight.replace('%', '')) / 100;
    console.log(`[${this.title}#updateSodaFillHeight] minimumSodaFillHeight`, minimumSodaFillHeight);

    const maximumSodaFillHeight = 1.2;
    console.log(`[${this.title}#updateSodaFillHeight] maximumSodaFillHeight`, maximumSodaFillHeight);

    const sodaInputs = document.querySelectorAll('.soda-input');
    console.log(`[${this.title}#updateSodaFillHeight] sodaInputs`, sodaInputs);

    const sodaFillHeightStep = parseFloat(
      (
        (maximumSodaFillHeight - minimumSodaFillHeight) / sodaInputs.length
      ).toFixed(2)
    );
    console.log(`[${this.title}#updateSodaFillHeight] sodaFillHeightStep`, sodaFillHeightStep);

    let sodaFillHeight = minimumSodaFillHeight;
    console.log(`[${this.title}#updateSodaFillHeight] (BEFORE) sodaFillHeight`, sodaFillHeight);

    sodaInputs.forEach((sodaInput: any) => {
      console.log(`[${this.title}#updateSodaFillHeight] sodaInput`, sodaInput);

      if (sodaInput.type === 'submit') return;

      if (sodaInput.value.length > 0) sodaFillHeight += sodaFillHeightStep;
    });

    if (submit) {
      if (sodaInputUsername.value === sodaFormUsername && sodaInputPassword.value === sodaFormPassword) {
        sodaFillHeight = maximumSodaFillHeight;

        sodaForm.classList.add('success');
      } else {
        sodaInputUsername.value = '';
        sodaInputPassword.value = '';

        sodaFillHeight = minimumSodaFillHeight;

        sodaForm.classList.add('error');

        setTimeout(() => {
          sodaForm.classList.remove('error');
        }, 500);
      }
    }

    console.log(`[${this.title}#updateSodaFillHeight] (AFTER) sodaFillHeight`, sodaFillHeight);

    const sanitizedSodaFillHeight = `${sodaFillHeight * 100}%`;
    console.log(`[${this.title}#updateSodaFillHeight] sanitizedSodaFillHeight`, sanitizedSodaFillHeight);

    sodaForm.style.setProperty('--sodaBeforeHeight', sanitizedSodaFillHeight);
  }
}
