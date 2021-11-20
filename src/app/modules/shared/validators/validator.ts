import { FormControl, FormGroup, ValidationErrors } from "@angular/forms";
import { Observable, Observer } from "rxjs";

export const userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
        setTimeout(() => {
            if (control.value === 'JasonWood') {
                // you have to return `{error: true}` to mark it as an error event
                observer.next({ error: true, duplicated: true });
            } else {
                observer.next(null);
            }
            observer.complete();
        }, 1000);
    });

export const confirmValidatorWrapper = function(matchTo: string) {
    return function confirmValidator(control: FormControl): ValidationErrors {
      if (!control.value) {
        return { error: true, required: true };
      } else if (control.value !== (control.parent as FormGroup).controls[matchTo].value) {
        return { confirm: true, error: true };
      }
      return {};
    };
}
