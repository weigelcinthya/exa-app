import { async, TestBed } from '@angular/core/testing';
import { CadastroUsuarioComponent } from './cadastro-usuario.component';
describe('CadastroUsuarioComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CadastroUsuarioComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CadastroUsuarioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=cadastro-usuario.component.spec.js.map