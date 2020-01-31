import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ICourse } from '../../interfaces/course.model';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { CustomValidators } from '../../utils/validator';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  @Input() course: ICourse;
  @Output() public clickSubmitBtn: EventEmitter<ICourse> = new EventEmitter<ICourse>();
  @Output() public clickCancelBtn: EventEmitter<void> = new EventEmitter<void>();

  public descriptionMaxLength = 500;
  public titleMaxLength = 50;
  public titleControl = new FormControl('', [Validators.required, CustomValidators.maxLengthValidation(this.titleMaxLength)]);
  public descriptionControl = new FormControl('', [Validators.required, CustomValidators.maxLengthValidation(this.descriptionMaxLength)]);
  public dateControl = new FormControl('', [Validators.required]);
  public lengthControl = new FormControl('', [Validators.required]);
  public authorsControl = new FormControl('', [Validators.required]);
  public courseForm: FormGroup;

  public get controls(): {[key: string]: AbstractControl} {
    return this.courseForm.controls;
  }

  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.buildForm();

    this.courseForm.valueChanges.subscribe(() => {
      this.course.name = this.courseForm.value.title;
      this.course.description = this.courseForm.value.description;
      this.course.date = new Date(Date.parse(this.courseForm.value.date)).toString();
      this.course.length = this.courseForm.value.length;
      this.course.authors = this.courseForm.value.authors;
    });
  }

  public buildForm() {
    this.courseForm = this.fb.group({
      title: this.titleControl,
      description: this.descriptionControl,
      date: this.dateControl,
      length: this.lengthControl,
      authors: this.authorsControl
    });

    this.titleControl.setValue(this.course.name);
    this.descriptionControl.setValue(this.course.description);
    this.dateControl.setValue(this.course.date);
    this.lengthControl.setValue(this.course.length);
    this.authorsControl.setValue(this.course.authors);
  }

  public handlerClickSubmitBtn(): void {
    this.clickSubmitBtn.emit(this.course);
  }

  public handlerClickCancelBtn(): void {
    this.clickCancelBtn.emit();
  }

}
