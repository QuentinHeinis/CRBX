<script setup>
import { onMounted, ref } from 'vue';

var strokeWidth = 2;
var bufferSize = ref("cmbBufferSize");

var svgElement = ref("svgElement");
var rect = ref()
onMounted(() => {
    // rect.value = svgElement.value?.getBoundingClientRect();
})
var path = null;
var strPath;
var buffer = []; // Contains the last positions of the mouse cursor
const mousedown = (e) => {
    bufferSize = ref("cmbBufferSize").value;
    path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "#000");
    path.setAttribute("stroke-width", strokeWidth);
    buffer = [];
    var pt = getMousePosition(e);
    appendToBuffer(pt);
    strPath = "M" + pt.x + " " + pt.y;
    path.value.setAttribute("d", strPath);
    svgElement.value.appendChild(path);
}
const mousemove = (e) => {
    if (path.value) {
        appendToBuffer(getMousePosition(e));
        updateSvgPath();
    }
}
const mouseup = () => {
    if (path) {
        path = null;
    }
}

var getMousePosition = function (e) {
    return {
        x: e.pageX - rect.left,
        y: e.pageY - rect.top
    }
};

var appendToBuffer = function (pt) {
    buffer.push(pt);
    while (buffer.length > bufferSize) {
        buffer.shift();
    }
};

// Calculate the average point, starting at offset in the buffer
var getAveragePoint = function (offset) {
    var len = buffer.length;
    if (len % 2 === 1 || len >= bufferSize) {
        var totalX = 0;
        var totalY = 0;
        var pt, i;
        var count = 0;
        for (i = offset; i < len; i++) {
            count++;
            pt = buffer[i];
            totalX += pt.x;
            totalY += pt.y;
        }
        return {
            x: totalX / count,
            y: totalY / count
        }
    }
    return null;
};

var updateSvgPath = function () {
    var pt = getAveragePoint(0);

    if (pt) {
        // Get the smoothed part of the path that will not change
        strPath += " L" + pt.x + " " + pt.y;

        // Get the last part of the path (close to the current mouse position)
        // This part will change if the mouse moves again
        var tmpPath = "";
        for (var offset = 2; offset < buffer.length; offset += 2) {
            pt = getAveragePoint(offset);
            tmpPath += " L" + pt.x + " " + pt.y;
        }

        // Set the complete current path coordinates
        path.setAttribute("d", strPath + tmpPath); svgElement
    }
};
</script>

<template>
    <div id="divSmoothingFactor">
        <label for="cmbBufferSize">Buffer size:</label>
        <select ref="cmbBufferSize">
            <option value="1">1 - No smoothing</option>
            <option value="4">4 - Sharp curves</option>
            <option value="8" selected="selected">8 - Smooth curves</option>
            <option value="12">12 - Very smooth curves</option>
            <option value="16">16 - Super smooth curves</option>
            <option value="20">20 - Hyper smooth curves</option>
        </select>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="svgElement"
        @mousedown="mousedown" @mousemove="mousemove" @mouseup="mouseup" x="0px" y="0px" width="600px" height="400px"
        viewBox="0 0 600 400" enable-background="new 0 0 600 400" xml:space="preserve">
    </svg>
</template>

<style>
#svgElement {
    border: 1px solid;
    background: white;
    margin-top: 4px;
    margin-left: 4px;
    cursor: default;
}

#divSmoothingFactor {
    position: absolute;
    left: 14px;
    top: 12px;
}
</style>