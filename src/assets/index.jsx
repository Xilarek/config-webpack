import * as $ from 'jquery';
import Post from '@modules/post';
import './styles/style.css';
import './styles/less.less';
import './styles/scss.scss';
import './babel';
import React from 'react';
import {render} from 'react-dom';
import xml from './elements/data.xml';
import csv from './elements/data.csv';
import file from './json/file';
import webpackLogo from './elements/webpack-logo.png';
const post = new Post('Webpack Post Title', webpackLogo);

//$('pre').html(post.toString());
console.log('JSON: ', file);
console.log('xml: ', xml);
console.log('csv: ', csv);
const App = () => (
    <div class="container">
        <h1>Webpack Course</h1>
        <hr />
        <div class="logo" />
        <hr />
        <pre/>
        <hr />
        <div class="box">
            <h2>Less</h2>
        </div>
        <div class="card">
            <h2>SCSS</h2>
        </div>
    </div>
);
render(<App />, document.getElementById('app'));