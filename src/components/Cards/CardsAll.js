import React from "react";
import "./cards-style.css";
import Api from "../../utils/Api";

//I know I should make a "Cards" component to serve all the cards, but it is working fine without it.
//So I'll leave it as is for now maybe I come back on it end of the project.

const CardsAll = () => {
  return (
    <>
      <h1>All Countries : </h1>
      {/* make it dynamic */}

      <div className="container ">
        <main role="main">
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                {/* ////////////////////////////////////implement single card /////////////////////////////////////////////////////////// */}
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <img
                      className="bd-img card-img-top"
                      width="100%"
                      height="225"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO4AAACnCAMAAAAhZ5C0AAABKVBMVEUAmzr+3wAAJ3b/4gD///8AmDsAmjv/5AAAlzwAJHUAInT/5gAAlD0AH3MAHHIAkz4AAH0AG3j/6gAAGHnm2RCkwSMAAGsAAF7f1RIAD3oAAGUAGHEhnDkAE2+hviZiqjHHzhvv3AtLpjSItyuzxyAwoC7y2Rbr1B7k0CTcyyvGrz2jk0tfXmQ6Q2sPKnCYiFO4qj9YVGgqNHLUvilMTGqtnUaWuihoZmJWWWc5P27V0xd3sC93d1tvcV5pXmZMSGyEe1ksOG8xK3WKhlNGV453gKfF5sp8wI1csnGYzKTk8ejj5e3Bxdc5TIiKk7QjOH5VZJZhXZNtapmcoLCgp8LU4ODA2sy/z9L0442z3br44FQ1pVTy6rYQiwxIrWTT1eLk0FX589X056bHAQD5AAALV0lEQVR4nO1dC1viSBYNUAQSTETRtBCDwrSI47Tto22n2+kZtQmPJCSRTbNLuyO7+/9/xN4K+KQKE0AeJuf7WvGDBk7urVv33LpVYZgQIUKECBEiRIgQIUKECBEiRIgQIZ6ATSbZWX+H6SHJ5vNsctbfYkpgl7a2I5HtraVAGDgezxdikUiskI/HZ/1dXh3sUnEjEXGR2Ci+cQOz7OZ6KnKP1Pom+4YJxzeLhUdsgW+huPlWPZqNF9djkWdIvC/G36SB45u/3I3aJ3w3fnmLBk5ubRcGbIsRK2xvvbU5OJ7MrxHJuoTX8sk3ZeDlYiFCZQt8I4Xi8qy/48QQX1onDNpnQ3j9jRiYjW/R/fixR2+9gRDtzj4e2ALf2OLPSUny7ENxaJiTFjlGs8mt995Me2/grcUVwsnNz95Ne2fgzwtqYFfW+jBt38ALKoTZeL7kl2sPpXx84Qy8tONl9qFYeG1nadbf3w/YeHI9RePiIpHo/aa8KAVJx8J4NLu5tUZkCywjpd1yec9FubxbigBvIt+1rc3F4MuyxfckColUpHzy6/7Fbx8OsmlA9uDDbxf7v56UIylC+MZJxyJUOrCsJbBNxfYOP55dAsuMKHBRACeIGeB9fPbxcC9GcIaFEMJLJFkbW40cXhxFsxkhOgAhk40eXRxGVgf/Fwjh+Q5ZoH3WBv1ytXT653F2hR/k2gO/kj3+c79EILy2vjS/BmaXixuDiUUqdfgXR+d6x1j46zA14NKxyEZxeU5HcJLNk/z45FNW5IaTdYeymP10QjBw4v1cJh1Y1g5G2FjhIr3yMtceVtIXhHJWYg6FMFnWxhJ7x2mvZDHSx3uD83Astj5nQji+eU7QPonSadazafsGzp6WCG+0cT5HcxJF1ibKF6SZZzj4zEWZMCbmSAjHQdYSEotE+SzzQjwm8l05I/CNxEAIz4WBk8XtwW8H36/8+yhssX1/LxPz6O3i7EN0fIksa2OlT5lRyGJkPpWIfEv5WScdSzsFcnkm9SE7KttoNPuBLB8ThVkK4WertY9tu3rkawJ6jvTRYMLRu4qzWxGmylr4Vt/HYgt8v9PeeUZCGBILalE1dTjyuL1D5pDCdzbV9zhLnH16bE++iOPSFb+cUMs/G5/Z6YYs0D70omqs9M1nLkXCyjdyeI64xdmp6qRkfH1InTF1yo804T4Fz5/SzOsK4anpJDDt1yH18sTe0dgjFyNztEdfgohFvk7JwPH4C0t6+2NG5Tuk94d9CuikKbShsSxJ1j4x7uUKL4iiLIuiKADgl+g+5jkPKv8RxMu9oZc1sbH1ynMwlrXkwvADPqYtq3l93Wq11D7g4fV1pWkd8IqiiN7H9XDzYgu/rhDGspYeP3rY/YdjGN0f7aqGtCr8QFX8s430fxqOY6qtiqVIipdqDpj3ePeFS5t6RSGMZe0LXAH/Qp2GBv/gZ6fWqCPtpgF/b2rVBsLQu4ZjtppA+UEKU7mnD19eL30tIZwky9rnQNVaj2lN67RRra3dwi9006nXMNtqo1HtcVatnCS7pIQobeJaoUiFx4i9zorwUvGrl4X4n6jaQcC00a5hM98g7bZaRVrtpuZat1bvaC7tWls3nEpOgvTLMlsWzbwnL5s3FvtanLROii/nCy9zBfwbtev1BgxYVNU015QNsLNWvam61r3R2q5P38JzSNN1x3on2Xq3SSnypL+vevnQQn55kiOYpcraAQAVzbWfDh7bR1fXddTDzW1vCP+Nh3Vj51ZDulpRTYvizXzGE11XCE9qBNNl7SB+AkmIRMI7jFwf7h9S0zadro56vtzROuDhWrUOVwcZ11cCJVanyXWcQUxMCLOb554X4lOn0rucpMgE3+RERQLmnG2CtduYdLVeS1ZR47YGJjavowqJcPbUm3lxGn0+ASHMJumydhCrZ1gLyTYt9IB7AmnJUh2ji6oQuJFWRx0wdPWH04rmBglnzrzSdYXwuHNScoisJSB1CXYVmoZBiz09iLmcWAHXRhCzIWi1IW7VkG6oYu75K4VLr8Mo0hPC48xJfnuFYrtXEHPEitFtvpQqcmJOabYwY4jejTbqaDBNd9Wc/MwZrl5KrJ58/lhdSkl2SBMyCamTKw4nSc2KpyRRUITjlvMD5qoOxKx2rdHRjWbuyYXirqhFDTLhtVH3Y7E4sfDzUbhG1W9D8LpWwgkyZ6ldhHOuWl2rQ55tiNKTV9BqVlTCX0farsPG837aGV2s7vsvY4BXS00D4WnppoEaTAeZkvzgHPy+51h1j7xvmcSyRVpRdRjd7/5LcnzTjsq5HCYM+eXfqAZBqyXcv4/oLa96gtSav6YdLGv9kwW6f/inK6hdW4xyOcv4oaF6tVbFaZnTvJuUxD/808VJh485id0hrdZ6oftNprGi96FYFQtTE3MVR4ckG4ZvrVYFA/feSv42Cl28IrzjlS977jVDHqBLsS4nWVS783f5o5yznXYD5EQNywmn6YYscTS6kEWfe6Y7aetyUdOgqYDHUMSWgbQGqEPIs7qqxE/FupMfu5KhS+Rnnl0XxTL1av1GQ7edhm4q4jTGLjPxyCw0LY9TsSA3DVCQ1UatU0WGIk8jMvcsPMl518e6giCpOmIQDtEIRbNTmXeZcbKql8Fxw2rOkmygmzqk0pB32FPKqpiRc+ZHNqVw4jjTHMZXeGfquOqDbhD6jz+yI+fMzKiKqE8JZxAUYcTx3S7tUvSQs7u4sldHaNcP2XH3bYyid13IlszzFLpcVK5UZLrxMRTLaHdwZc8P2zH1LuO/mtFf/JNtp2VxMomtIIIfiyJmRM+1IL+4MiGrRP/1TnYC1QzGX61q9bTfbyNWkCEQjcdbjuk+IVS6zsGwASzYMID/55ntRGpVjK9KZKycvqPrmAOVmDu6qtx7iWHS10sAnGzp6KdHtpNsyfFeZ17N8JAEg4/yd2UY7rmReUUUhf4DCs87HxdzXW9+Nck6M4bXVYTV72nOMu2HFIq37AETyqY9LOvgLVci4ZLIbFYRMLytESVO0oKqmw8ERVNXn+sGRW0OcWLOchxc66pUZrdGxHhdAUx9yRy3HqkfvuJUBnxWGZZA85aBbIE7cJxZrgB6XN9NnKZ55bGrcgqR0zBvtlX8tG2Ls1zfZTyt3sd2j58YUyJKIcWyiFehBzFng1wUxdmu3jPeejOeNN5IjkHInUTbMGx6WUto6ga+GrPuzWC8dd48IqKoA4EKwOUQIiwI3T8tOI40D503GP76qmTXaZ+vZx7Y9sEQtrzysnGn01fFjNQ113SeKsOofG/zh5jVS0g4TjXdeWpOuuYY3z2RvNVFKi009ddGuSh3YANNURAcvSXMUU8k47vjVTINmTxU5ZaBky5OOOAgh1YFsaXKVgUrhznqeGV89jNzVs4i01VUB0duxXQUzmo1+ZzjKG7hea76mRmf3eocTfqA9+JnFNNUopwkwhzUXwifs251ZkJ7EbAnY70PD7I2ZCj9tdK524vATGqnCR+tHOBmWNnW75ca5nGnCcb4+4g4zkEmfiA01Va/ujGf+4gwxt8lJttOb7wKUr/XaH53iTET2AMoS30V0XTn4LneA8iMtsOT0L0BOlfFVZ/MfO/wHGX/rlCpDDyDiz5cVJj7/buM/93ZJLrg1fxC7M5mgrb3ngnYyQoYgTo3gxnzVBRu0U5FYcY68+Z04c68wQjUiUaM//OqLhf6vKpJnUYWWZDTyJiAnTXHBO0kQYwgnROJEaxTQIN2xisTsBN8maCdz8wE7PRtJmhnqzMBOzkfI1D3RcAI1F0vmKDd04QJ2B1rmKDdjyhod5tiAnYvMSZod4pjAnYfQIxA3eWRCdo9PJmA3aGVCdr9d0OECBEiRIgQIUKECBEiRIgQIUJ4w/8BRM/FFEz9eTMAAAAASUVORK5CYII="
                      alt="never gonna give you up"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        {" "}
                        The population number of Brazil, <br />
                        is 17.5
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="container mt-2">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary "
                          >
                            View Population
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default CardsAll;
