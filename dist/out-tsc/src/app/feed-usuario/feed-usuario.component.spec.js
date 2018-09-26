import { async, TestBed } from '@angular/core/testing';
import { FeedUsuarioComponent } from './feed-usuario.component';
describe('FeedUsuarioComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FeedUsuarioComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FeedUsuarioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=feed-usuario.component.spec.js.map