import { Component } from '@angular/core';

@Component({
selector: 'app-footer',
standalone: true,

//inline style////
template: `
<footer class="footer">
<p>© 2025 Interns Portal | All rights reserved.</p>
</footer>
`,
styles: [`
.footer {
background-color: #f8f9fa;
color: #333;
text-align: center;
padding: 12px 0;
border-top: 1px solid rgba(0,0,0,0.1);
font-size: 0.9rem;
}
`]
})
export class FooterComponent {}
