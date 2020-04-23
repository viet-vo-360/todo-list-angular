import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
    exports: [
        NzButtonModule,
        NzIconModule,
        NzTableModule,
        NzSpaceModule,
        NzInputModule,
        NzFormModule,
        NzDropDownModule,
        NzDatePickerModule,
        NzCheckboxModule,
        NzSelectModule
    ]
})
export class NgZorroAntdModule {

}

