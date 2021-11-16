import { FormControl, ValidationErrors } from "@angular/forms";
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

