"use strict";
/*
 * @Author: jlzm
 * @Date: 2020-07-03 09:41:00
 * @LastEditors: jlzm
 * @LastEditTime: 2020-07-07 09:21:44
 * @FilePath: \leetCode\src\app\main.ts
 */
const domExampleWrap = document.querySelector(".example-wrap");
const domProblemsList = document.querySelectorAll(".problems-wrap_item");
const sumTwoNumber = (nums, target) => {
    console.log("nums", nums);
    console.log("target", target);
    const map = Object.create(null);
    for (let i = 0; i < nums.length; i++) {
        if (map[target - nums[i]] !== undefined) {
            return [map[target - nums[i]], i];
        }
        map[nums[i]] = i;
    }
};
const showExampleWrap = (...args) => {
    const [event] = args;
    console.log("event", event);
    console.log("event.target", event.target);
    console.log("event.currentTarget", event.currentTarget);
    console.log("domExampleWrap", domExampleWrap);
    for (const problems of domProblemsList) {
        problems.classList.remove("active");
    }
    event.currentTarget.classList.add("active");
    console.log("event.target.classList", event.target.classList);
    domExampleWrap.classList.remove("none");
    setTimeout(() => {
        domExampleWrap.classList.add("show");
    }, 300);
    const propsData = {
        nums: [2, 7, 11, 15],
        target: 9,
    };
    // sumTwoNumber(propsData.nums, propsData.target);
    console.log("propsData.nums", propsData.nums);
    const renderInnerHtml = `
    <pre class="example-wrap__code">
const sumTwoNumber = (nums: number[], target: number) => {

    const map = Object.create(null);

    for (let i = 0; i < nums.length; i++) { 

        if (map[target - nums[i]] !== undefined) {
            return [map[target - nums[i]], i];
        }
        
        map[nums[i]] = i; 
    } 
}; 
    </pre> 
    <button onClick="sumTwoNumber(${propsData.nums}, ${propsData.target})" class="example-wrap__btn">运行</button>
    `;
    domExampleWrap.innerHTML = renderInnerHtml;
};
