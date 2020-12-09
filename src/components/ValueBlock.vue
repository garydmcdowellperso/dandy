<template>
    <div id="stat-block-wrapper">
        <div id="stat-block" class="stat-block">
            <hr class="orange-border">
            <div class="section-left">
                <div class="creature-heading">
                    <h1 id="monster-name">{{title}}</h1>
                </div> <!-- creature heading -->
                <svg height="5" width="100%" class="tapered-rule">
                    <polyline points="0,0 400,2.5 0,5"></polyline>
                </svg>
                <div class="top-stats">
                    <div class="scores">
                        <div class="scores-strength">
                            <p id="strpts">{{value}}</p>
                        </div> <!-- scores strength -->
                    </div> <!-- scores -->
                </div> <!-- top stats -->
                <svg height="5" width="100%" class="tapered-rule">
                    <polyline points="0,0 400,2.5 0,5"></polyline>
                </svg>
            </div> <!-- section left -->
            <hr class="orange-border bottom">
        </div>
    </div>
</template>

<script>
export default {
  name: "ValueBlock",
  props: ['title', 'value'],
};
</script>
<style scoped>
.indent {
    text-indent: 1rem;
}

.reverse-indent {
    text-indent: -1rem;
    padding-left: 1rem;
}

.removable-list-item:hover {
    color: red;
    text-decoration: line-through;
    cursor: pointer;
}

.statblock-image {
    width: 12px;
    height: 12px;
    cursor: pointer;
}

.statblock-list {
    text-align: left;
    margin: 4px 4px .5rem;
    padding-left: 16px;
}

#stat-block-wrapper {
    margin: 20px;
    box-shadow: 0 0 1.5rem #867453;
    display: inline-block;
}

#understands-but-input {
    width: 8rem;
}

#other-language-input {
    width: 16rem;
}

#format-helper {
	font-style: italic;
}

#legendaries-descsection {
    margin: 8px 0 0;
}

#stat-helper tr {
    border-bottom: 1px solid;
}

#stat-helper td,
#stat-helper th {
    text-align: center;
    border-left: 1px solid;
    min-width: 3rem;
    padding: 0 .5rem;
}

#stat-helper .left-td {
    border-left: none;
    text-align: left;
    padding-left: 0px;
    font-weight: bold;
}

@media screen and (min-width: 992px) {
    #stat-block-body {
        background-image: url("https://raw.githubusercontent.com/Tetra-cube/Tetra-cube.github.io/master/dnd/dndimages/statblockbkg.jpg");
    }
}

.stat-block {
    text-align: left;
    font-size: 12.5px;
    line-height: 1.2em;
    display: inline-block;
    vertical-align: top;
    width: 200px;
    background: #FDF1DC;
    background-size: cover;
	background-position: center; 
    background-image: url('https://raw.githubusercontent.com/Tetra-cube/Tetra-cube.github.io/master/dnd/dndimages/statblockparch.jpg');
    padding: 10px 10px 20px;
    box-sizing: border-box;
    font-family: 'Noto Sans', 'Myriad Pro', Calibri, Helvetica, Arial, sans-serif;
}

.stat-block.wide {
    width: 800px;
    text-align: center;
}

.stat-block.wide .section-left,
.stat-block.wide .section-right {
    display: inline-block;
    vertical-align: top;
    width: 48%;
    text-align: left;
}

.stat-block.wide .section-left {
    margin-right: 1.5%;
}

.stat-block.wide .section-right {
    margin-left: 1.5%;
}

/* @media screen and (max-width: 675px) { */
/* .stat-block.wide { */
/* min-width: 280px; */
/* } */
/* .stat-block.wide .section-left, */
/* .stat-block.wide .section-right { */
/* display: block; */
/* width: 100%; */
/* } */
/* .stat-block.wide .section-left { */
/* margin: 0; */
/* } */
/* .stat-block.wide .section-right { */
/* margin: 0; */
/* } */
/* } */
.orange-border {
    display: block;
    background: #E69A28;
    background-size: cover;
	background-position: center; 
    background-image: url('https://raw.githubusercontent.com/Tetra-cube/Tetra-cube.github.io/master/dnd/dndimages/statblockbar.jpg');
    border: 1px solid #000;
    height: 5px;
    padding: 0 10px 0;
    margin: -10px -10px 0;
    box-sizing: initial;
}

.orange-border.bottom {
    margin: 15px -10px -20px;
}

.tapered-rule {
    display: block;
    width: 100%;
    height: 5px;
    border: none;
    color: #922610;
    fill: #922610;
}

.creature-heading {
    margin: 0 0 10px;
}

.creature-heading h1 {
    font-family: 'Libre Baskerville', 'Lora', 'Calisto MT', 'Bookman Old Style', Bookman, 'Goudy Old Style', Garamond, 'Hoefler Text', 'Bitstream Charter', Georgia, serif;
    color: #922610;
    font-size: 21px;
    line-height: 1.2em;
    margin: 10px 0 0;
    letter-spacing: 1px;
    font-variant: small-caps;
    font-weight: bold;
}

.creature-heading h2 {
    font-family: 'Noto Sans', 'Myriad Pro', Calibri, Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-style: italic;
    font-size: 12px;
    line-height: 1.2em;
    margin: 0;
}

.property-line h4,
.property-line p {
    display: inline;
    margin: 0;
    color: #922610;
    font-size: 12.5px;
    line-height: 1.2em;
}

.property-line h4 {
    color: #7A200D;
}

.property-line {
    text-indent: -1em;
    padding-left: 1.1em;
    line-height: 1.4em;
}

.property-line.first {
    margin: 8px 0 0;
}

.property-line.last {
    margin: 0 0 10px;
}

.scores {
    text-align: center;
    color: #922610;
}

.scores>div {
    display: inline-block;
    vertical-align: middle;
    width: 15.5%;
    min-width: 40px;
    font-size: 12px;
    line-height: 1em;
}

.scores h4 {
    margin: 10px 0 2px;
    font-size: 14px;
    line-height: 1.2em;
    text-transform: uppercase;
    color: #7A200D;
}

.scores p {
    margin: 0 0 10px;
    line-height: 1.2em;
}

.property-block h4,
.property-block p {
    font-size: 12.5px;
    line-height: 1.2em;
    display: inline;
    margin: 0;
}

.property-block h4 {
    font-style: italic;
}

.property-block {
    padding: 10px 2px 0;
}

.legendary {
    padding-top: 0;
}

.legendary h4 {
    padding-left: 2px;
    font-style: normal;
}

.legendary p {
    font-style: normal;
}

#traits-list-right> :first-child.property-block.legendary {
    /* for a rare edge case where a legendary action is the first item in the second column */
    padding-top: 10px;
}

.lairregional {
    padding-top: 0;
}

.lairregional p {
    font-style: normal;
}

#traits-list-right> :first-child.property-block.lairregional {
    /* for a rare edge case where a lair action is the first item in the second column */
    padding-top: 10px;
}

.actions h3 {
    border-bottom: 2px solid #7A200D;
    color: #7A200D;
    font-size: 21px;
    font-variant: small-caps;
    font-weight: normal;
    letter-spacing: 1px;
    margin: 20px 0 0;
    padding: 0 0 10px;
    text-indent: 5px;
}

.actions {
    margin: 0 0 20px;
}

.actions:last-child {
    margin: 0;
}

.indent {
    text-indent: 1em;
}

.reverse-indent {
    text-indent: -1em;
    padding-left: 1em;
}

.top-stats {
    /* Fix for a weird bug that I can't figure out the cause of */
    margin: 0 0 10px;
}

#print-block h1,
#print-block h3,
#print-block h4,
#print-block p {
    color: black;
}

#print-block h3 {
    border-bottom-color: black;
}

#print-block .tapered-rule {
    color: black;
    fill: black;
}

#print-block .stat-block {
    background: none;
}

#print-block .orange-border {
    display: none;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
