'use strict'

const should = require('should')
const path = require('path')

const getDataFromCsv = require('..')

describe('race-studio', function () {
  it('detect metadata', function (done) {
    const csvFilePath = path.resolve('test/test.csv')
    getDataFromCsv(csvFilePath, function (err, data) {
      const {metadata} = data

      should(metadata).be.eql([
        'Format',
        'AIM CSV File',
        'Venue',
        'INSIA',
        'Vehicle',
        'UPM12_',
        'User',
        'Diego Lopez',
        'Data Source',
        'AIM Data Logger',
        'Comment',
        'Ensayo Prueba Aceleracion',
        'Date',
        '10/29/15',
        'Time',
        '16:06:09',
        'Sample Rate',
        '200',
        'Duration',
        '428.997',
        'Segment',
        'Session',
        'Beacon Markers',
        '15.157',
        '124.069',
        '289.109',
        '339.444',
        '429.691',
        'Segment Times',
        '0:15.157',
        '1:48.912',
        '2:45.040',
        '0:50.335',
        '1:30.247'
      ])

      done(err)
    })
  })

  it('detect headers', function (done) {
    const csvFilePath = path.resolve('test/test.csv')
    getDataFromCsv(csvFilePath, function (err, data) {
      const {headers} = data

      should(headers).be.eql([
        'Time',
        'Distance',
        'Brake_Press_af',
        'Susp_rear_left',
        'Susp_rear_righ',
        'Yaw',
        'Steering',
        'Vertical_acc',
        'Lateral_acc',
        'Longitudinal_a',
        'Calculated_Gea',
        'Datalogger_Tem',
        'Battery',
        'RPM',
        'TPS',
        'INYECTION_FUEL',
        'IGNITION_ANGLE',
        'PE3_LAMBDA',
        'P_Oil',
        'lambda_PE3_ANA',
        'P_Fuel',
        'PE3_FREQ1_spee',
        'PE3_FREQ2_spee',
        'PE3_FREQ3_spee',
        'PE3_FREQ4_spee',
        'T_Coolant',
        'T_Oil',
        'T_Fuel',
        'Susp_front_lef',
        'MAF',
        'Brake_front',
        'Susp_front_rig',
        'GPS_Speed',
        'GPS_Nsat',
        'GPS_LatAcc',
        'GPS_LonAcc',
        'GPS_Slope',
        'GPS_Heading',
        'GPS_Gyro',
        'GPS_Altitude',
        'GPS_PosAccuracy',
        'Velocidad Delante',
        'Velocidad Detras',
        'GPS_Latitude',
        'GPS_Longitude',
        'GPS_Elevation',
        'sec',
        'km',
        'bar',
        'mm',
        'deg/s',
        'deg',
        'g',
        '#',
        '�C',
        'V',
        'rpm',
        '%',
        'ms',
        'lambda',
        'Hz',
        'km/h',
        'm',
        'KM/H',
        'Unit',
        '�',
        'cm',
        '',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
        '32',
        '33',
        '34',
        '35',
        '36',
        '37',
        '38',
        '39',
        '40',
        '41',
        '42',
        '43',
        '44'
      ])

      done(err)
    })
  })

  it('detect values', function (done) {
    const csvFilePath = path.resolve('test/test.csv')
    getDataFromCsv(csvFilePath, function (err, data) {
      const {values} = data

      should(values).be.eql([
        '0.000',
        '7.965088',
        '-1.037148',
        '0.081345',
        '-135.135132',
        '-440.502502',
        '-0.318078',
        '-0.237986',
        '0.196796',
        '0.000000',
        '33.124420',
        '11.744385',
        '11479.000000',
        '45.799999',
        '2.510000',
        '47.299999',
        '0.970000',
        '3.182000',
        '2.517000',
        '3.146000',
        '88.000000',
        '94.000000',
        '33.000000',
        '-2.338666',
        '2.745361',
        '9.033203',
        '-4.290944',
        '3.000000',
        '11.000000',
        '-0.223248',
        '-150.194748',
        '-0.320034',
        '641.000000',
        '8.230000',
        '40.387480509608',
        '-3.632461882431',
        '641.84'
      ])

      done(err)
    })
  })
})
