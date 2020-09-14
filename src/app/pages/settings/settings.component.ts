import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

declare const $: any;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // Function for bar range
    const $valueSpan = $('.valueSpan2');
    const $value = $('#customRange11');
    $valueSpan.html($value.val());
    $value.on('input change', () => {
      $valueSpan.html($value.val());
    });

  }

  rangeToggle(): void {
        // Definição cores de alerta pelo Slider Toggle

        const $valueDispVerde = $( '.classAlDispVerde' );
        const $valueIdDispVerde = $( '#idAlDispVerde' );
        $valueDispVerde.html($valueIdDispVerde.val());
        $valueIdDispVerde.on('input change', () => {
          $valueDispVerde.html($valueIdDispVerde.val());
        });

        const $valueDispAmarelo = $( '.classAlDispAmarelo' );
        const $valueIdDispAmarelo = $( '#idAlDispAmarelo' );
        $valueDispAmarelo.html($valueIdDispAmarelo.val());
        $valueIdDispAmarelo.on('input change', () => {
          $valueDispAmarelo.html($valueIdDispAmarelo.val());
        });

        const $valueDispVermelho = $( '.classAlDispVermelho' );
        const $valueIdDispVermelho = $( '#idAlDispVermelho' );
        $valueDispVermelho.html($valueIdDispVermelho.val());
        $valueIdDispVermelho.on('input change', () => {
          $valueDispVermelho.html($valueIdDispVermelho.val());
        });

        const $valuePerfVerde = $( '.classAlPerfVerde' );
        const $valueIdPerfVerde = $( '#idAlPerfVerde' );
        $valuePerfVerde.html($valueIdPerfVerde.val());
        $valueIdPerfVerde.on('input change', () => {
          $valuePerfVerde.html($valueIdPerfVerde.val());
        });

        const $valuePerfAmarelo = $( '.classAlPerfAmarelo' );
        const $valueIdPerfAmarelo = $( '#idAlPerfAmarelo' );
        $valuePerfAmarelo.html($valueIdPerfAmarelo.val());
        $valueIdPerfAmarelo.on('input change', () => {
          $valuePerfAmarelo.html($valueIdPerfAmarelo.val());
        });

        const $valuePerfVermelho = $( '.classAlPerfVermelho' );
        const $valueIdPerfVermelho = $( '#idAlPerfVermelho' );
        $valuePerfVermelho.html($valueIdPerfVermelho.val());
        $valueIdPerfVermelho.on('input change', () => {
          $valuePerfVermelho.html($valueIdPerfVermelho.val());
        });

        const $valueQualVerde = $( '.classAlQualVerde' );
        const $valueIdQualVerde = $( '#idAlQualVerde' );
        $valueQualVerde.html($valueIdQualVerde.val());
        $valueIdQualVerde.on('input change', () => {
          $valueQualVerde.html($valueIdQualVerde.val());
        });

        const $valueQualAmarelo = $( '.classAlQualAmarelo' );
        const $valueIdQualAmarelo = $( '#idAlQualAmarelo' );
        $valueQualAmarelo.html($valueIdQualAmarelo.val());
        $valueIdQualAmarelo.on('input change', () => {
          $valueQualAmarelo.html($valueIdQualAmarelo.val());
        });

        const $valueQualVermelho = $( '.classAlQualVermelho' );
        const $valueIdQualVermelho = $( '#idAlQualVermelho' );
        $valueQualVermelho.html($valueIdQualVermelho.val());
        $valueIdQualVermelho.on('input change', () => {
          $valueQualVermelho.html($valueIdQualVermelho.val());
        });

        const $valueOeeVerde = $( '.classAlOeeVerde' );
        const $valueIdOeeVerde = $( '#idAlOeeVerde' );
        $valueOeeVerde.html($valueIdOeeVerde.val());
        $valueIdOeeVerde.on('input change', () => {
          $valueOeeVerde.html($valueIdOeeVerde.val());
        });

        const $valueOeeAmarelo = $( '.classAlOeeAmarelo' );
        const $valueIdOeeAmarelo = $( '#idAlOeeAmarelo' );
        $valueOeeAmarelo.html($valueIdOeeAmarelo.val());
        $valueIdOeeAmarelo.on('input change', () => {
          $valueOeeAmarelo.html($valueIdOeeAmarelo.val());
        });

        const $valueOeeVermelho = $( '.classAlOeeVermelho' );
        const $valueIdOeeVermelho = $( '#idAlOeeVermelho' );
        $valueOeeVermelho.html($valueIdOeeVermelho.val());
        $valueIdOeeVermelho.on('input change', () => {
          $valueOeeVermelho.html($valueIdOeeVermelho.val());
        });
  }

}
