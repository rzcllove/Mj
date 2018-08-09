+function(window){
  var pointStyle = {
    '0': {backgroundColor: '#FF0000', width: '0.36rem', height: '0.36rem'},
    '1': {backgroundColor: '#FF0000', width: '0.36rem', height: '0.36rem'},
    '2': {backgroundColor: '#FF0000', width: '0.36rem', height: '0.36rem'},
    '3': {backgroundColor: '#f53878', width: '0.36rem', height: '0.36rem'},
    '4': {backgroundColor: '#5583fb', width: '0.36rem', height: '0.36rem'},
    '5': {}
  }
  
var points = [
    {
	  points:[],
      id: 1,
      location: {left: 0.2, top: 3.52},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 2,
      location: {left: 2.1, top: 3.52},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 3,
      location: {left: 3.36, top: 3.52},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 4,
      location: {left: 4.9, top: 3.52},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 5,
      location: {left: 6, top: 3.52},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 6,
      location: {left: 6.2, top: 3.52},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 7,
      location: {left: 7.35, top: 3.52},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 8,
      location: {left: 14.9, top: 3.52},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 9,
      location: {left: 15.45, top: 3.52},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 10,
      location: {left: 16.65, top: 3.52},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 11,
      location: {left: 18, top: 3.52},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 12,
      location: {left: 18.9, top: 3.52},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 13,
      location: {left: 0.22, top: 4.1},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 14,
      location: {left: 3.75, top: 4.1},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 15,
      location: {left: 4.05, top: 4.1},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 16,
      location: {left: 6.65, top: 4.1},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 17,
      location: {left: 7.93, top: 4.1},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 18,
      location: {left: 15.6, top: 4.1},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 19,
      location: {left: 16.78, top: 4.1},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 20,
      location: {left: 17.95, top: 4.1},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 21,
      location: {left: 18.9, top: 4.1},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 22,
      location: {left: 8.32, top: 2},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 23,
      location: {left: 7.46, top: 2.8},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 24,
      location: {left: 7.86, top: 2.8},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 25,
      location: {left: 8.32, top: 2.8},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 26,
      location: {left: 7.25, top: 1.72},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 27,
      location: {left: 1.68, top: 4.68},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 28,
      location: {left: 2.46, top: 4.68},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 29,
      location: {left: 4.06, top: 4.68},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 30,
      location: {left: 4.26, top: 4.68},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 31,
      location: {left: 5.85, top: 4.68},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 32,
      location: {left: 7.05, top: 4.68},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 33,
      location: {left: 15.15, top: 4.68},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 34,
      location: {left: 15.15, top: 5.25},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 35,
      location: {left: 7.05, top: 5.25},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 36,
      location: {left: 7.75, top: 5.25},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 37,
      location: {left: 8.35, top: 5.25},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 38,
      location: {left: 2.05, top: 5.2},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 39,
      location: {left: 4.5, top: 5.3},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 40,
      location: {left: 3.05, top: 4.9},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 41,
      location: {left: 7.72, top: 5.84},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 42,
      location: {left: 15.28, top: 2.8},
      type: 'origin',
      content: '',
      is: false
    },
    {
		points:[],
      id: 43,
      location: {left: 17.01, top: 3.4},
      type: 'origin',
      content: '',
      is: true
    },
    {
		points:[],
      id: 44,
      location: {left: 17.55, top: 3.4},
      type: 'origin',
      content: '',
      is: true
    },
    {
		points:[],
      id: 45,
      location: {left: 17.01, top: 4.1},
      type: 'origin',
      content: '',
      is: true
    },
    {
		points:[],
      id: 46,
      location: {left: 17.55, top: 4.1},
      type: 'origin',
      content: '',
      is: true
    },
    {
		points:[],
      id: 47,
      location: {left: 6.868, top: 2.9},
      type: 'origin',
      content: '',
      is: true
    },
    {
		points:[],
      id: 48,
      location: {left: 7.01, top: 2.25},
      type: 'origin',
      content: '',
      is: true
    },
    {
		points:[],
      id: 49,
      location: {left: 8.27, top: 2.25},
      type: 'origin',
      content: '',
      is: true
    },
    {
		points:[],
      id: 50,
      location: {left: 8.56, top: 2.8},
      type: 'origin',
      content: '',
      is: true
    },
    {
		points:[],
      id: 51,
      location: {left: 9.18, top: 1.1},
      type: 'origin',
      content: '',
      is: true
    },
    {
		points:[],
      id: 52,
      location: {left: 9.45, top: 1.6},
      type: 'origin',
      content: '',
      is: true
    },
    {
		points:[],
      id: 53,
      location: {left: 2.6, top: 3.52},
      type: 'origin',
      content: '',
      is: true
    },
    {
		points:[],
      id: 54,
      location: {left: 2.83, top: 4.1},
      type: 'origin',
      content: '',
      is: true
    },
    {
		points:[],
      id: 55,
      location: {left: 3.42, top: 4.1},
      type: 'origin',
      content: '',
      is: true
    },
    {
		points:[],
      id: 56,
      location: {left: 3.24, top: 4.68},
      type: 'origin',
      content: '',
      is: true
    },
    {
		points:[],
      id: 57,
      location: {left: 4.64, top: 4.1},
      type: 'origin',
      content: '',
      is: true
    },
    {
		points:[],
      id: 58,
      location: {left: 4.86, top: 4.68},
      type: 'origin',
      content: '',
      is: true
    },
    {
		points:[],
      id: 59,
      location: {left: 5.22, top: 4.1},
      type: 'origin',
      content: '',
      is: true
    },
	{
		points:[],
      id: 60,
      location: {left: 5.39, top: 3.52},
      type: 'origin',
      content: '',
      is: true
    },
	{
		points:[],
      id: 61,
      location: {left: 17.1, top: 4.1},
      type: 'origin',
      content: '',
      is: true
    },
	{
		points:[],
      id: 62,
      location: {left: 17.58, top: 4.1},
      type: 'origin',
      content: '',
      is: true
    },
	{
		points:[],
      id: 63,
      location: {left: 17.1, top: 3.52},
      type: 'origin',
      content: '',
      is: true
    },
	{
		points:[],
      id: 64,
      location: {left: 17.58, top: 3.52},
      type: 'origin',
      content: '',
      is: true
    }
  ];
  var pointBox = [
    {
      id: 1,
      name: 'a',
      location: {
        left: 1,
        top: 1
      }
    }
  ]
  var menu1Lists = [
    {
      imgUrl: '8.png',
      deg: 0
    },
    {
      imgUrl: '9.png',
      deg: -45
    },
    {
      imgUrl: '10.png',
      deg: -90
    },
    {
      imgUrl: 'pink.png',
      deg: -135
    },
    {
      imgUrl: 'blue.png',
      deg: -180
    }
  ];
  var menu2Lists = [
    [
      { name: '△1' ,img:'s1.png'},
      { name: '△2' ,img:'s2.png'},
      { name: '△3' ,img:'s3.png'},
      { name: '△4' ,img:'s4.png'},
      { name: '△5' ,img:'s5.png'},
      { name: '△6' ,img:'s6.png'},
      { name: '△7' ,img:'s7.png'},
      { name: '△8' ,img:'s8.png'},
      { name: '△9' ,img:'s9.png'},
      { name: '△10',img:'s10.png'},
      { name: '△11',img:'s11.png'},
      { name: '△12',img:'s12.png'},
      { name: '△13',img:'s13.png'},
      { name: '△14',img:'s14.png'},
      { name: '△15',img:'s15.png'},
      { name: '△16',img:'s16.png'},
      { name: '△17',img:'s17.png'},
      { name: '△18',img:'s18.png'},
      { name: '△19',img:'s19.png'},
      { name: '△20',img:'s20.png'}
    ],
    [
      { name: '$1' ,img:'q1.png'},
      { name: '$2' ,img:'q2.png'},
      { name: '$3' ,img:'q3.png'},
      { name: '$4' ,img:'q4.png'},
      { name: '$5' ,img:'q5.png'},
      { name: '$6' ,img:'q6.png'},
      { name: '$7' ,img:'q7.png'},
      { name: '$8' ,img:'q8.png'},
      { name: '$9' ,img:'q9.png'},
      { name: '$10',img:'q10.png'},
      { name: '$11',img:'q11.png'},
      { name: '$12',img:'q12.png'},
      { name: '$13',img:'q13.png'},
      { name: '$14',img:'q14.png'},
      { name: '$15',img:'q15.png'},
      { name: '$16',img:'q16.png'},
      { name: '$17',img:'q17.png'},
      { name: '$18',img:'q18.png'},
      { name: '$19',img:'q19.png'},
      { name: '$20',img:'q20.png'}
    ],
    [
      { name: 'Ｏ1',img:'y1.png' },
	  { name: 'Ｏ2',img:'y2.png' },
	  { name: 'Ｏ3',img:'y3.png' },
	  { name: 'Ｏ4',img:'y4.png' },
	  { name: 'Ｏ5',img:'y5.png' },
	  { name: 'Ｏ6',img:'y6.png' },
	  { name: 'Ｏ7',img:'y7.png' },
	  { name: 'Ｏ8',img:'y8.png' },
	  { name: 'Ｏ9',img:'y9.png' },
	  { name: 'Ｏ10',img:'y10.png' },
	  { name: 'Ｏ11',img:'y11.png' },
	  { name: 'Ｏ11',img:'y12.png' },
	  { name: 'Ｏ13',img:'y13.png' },
	  { name: 'Ｏ14',img:'y14.png' },
	  { name: 'Ｏ15',img:'y15.png' },
	  { name: 'Ｏ16',img:'y16.png' },
      { name: 'Ｏ17',img:'y17.png' },
	  { name: 'Ｏ18',img:'y18.png' },
	  { name: 'Ｏ19',img:'y19.png' },
	  { name: 'Ｏ20',img:'y20.png' }
    ],
    [
      { name: '货车' },
      { name: '客车' },
      { name: '停电' },
      { name: '脱轨器' }
    ],
    [
      { name: '限高' },
      { name: '限重' },
      { name: '停基改电' },
      { name: '停电' },
      { name: '站间闭塞' },
      { name: '线路封锁' },
      { name: '区间禁会' },
      { name: '越站调车' },
      { name: '清扫道岔' },
      { name: '道路封锁' },
      { name: '反方向行车' },
      { name: '人力制动机' },
      { name: '区间救援' },
      { name: '超限' },
      { name: '铁鞋' }
    ]
  ]
  var tables = [
    {
      car: '',
      direct: '',
      zhanyong: ''
    },
    {
      car: '',
      direct: '',
      zhanyong: ''
    },
    {
      car: '',
      direct: '',
      zhanyong: ''
    },
    {
      car: '',
      direct: '',
      zhanyong: ''
    },
    {
      car: '',
      direct: '',
      zhanyong: ''
    }
  ]
  window.points = points
  window.menu1Lists = menu1Lists
  window.menu2Lists = menu2Lists
  window.pointStyle = pointStyle
  window.tables = tables
}(window)
