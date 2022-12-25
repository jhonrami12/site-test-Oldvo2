import { Component, OnInit, HostListener } from '@angular/core';

declare var $: any;
declare const KUTE: any;

@Component({
  selector: 'app-welcome-home',
  templateUrl: './welcome-home.component.html',
  styleUrls: ['./welcome-home.component.css'],
})
export class WelcomeHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.initAnimations();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.aspectRatioSVG();
  }

  /**
   * Initialize the animation of SVGs.
   */
  initAnimations() {
    let arrAllAnim = [
      { name: 'st0', timeDur: 5000 },
      { name: 'st1', timeDur: 5500 },
      { name: 'st2', timeDur: 6000 },
      { name: 'st3', timeDur: 5200 },
    ];

    arrAllAnim.forEach((elem) => {
      if ($(`#${elem.name}_start`).get(0)) {
        var shape1 = KUTE.fromTo(
          `#${elem.name}_start`,
          { path: `#${elem.name}_start` },
          { path: `#${elem.name}_end` },
          {
            duration: elem.timeDur,
            easing: 'easingQuadraticInOut',
            repeat: 20,
            repeatDelay: 1000,
            yoyo: true,
          }
        ).start();
      }
    });

    this.aspectRatioSVG();
  }

  /*
   * SVG Aspect Ratio
   */
  aspectRatioSVG() {
    if ($(window).width() < 2000) {
      $('svg[preserveAspectRatio]').each(function () {
        $(document).attr('preserveAspectRatio', 'xMinYMin');
      });
    } else {
      $('svg[preserveAspectRatio]').each(function () {
        $(document).attr('preserveAspectRatio', 'none');
      });
    }
  }
}
