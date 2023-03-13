import "./Table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

const List = () => {
  const tableImg = {
    link: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAkACQAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCABAAEADAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/igCOSVYhluSegHUn+Q+pqoxctum7f8AX5ETmoK7+S7nl/ibX9XinaNLr+z7NpBDF5AKyyvtyR9oK+ZuHOBCYhjqGxurCsqkXZSsujWia83q7+hManNrY4i5sJb077mWecnktNLJMTnByTIzHsD/ADrlcZ9Xf5/5lcy7EMVlLY4e2nuLZhyGgleEjvkFGB69PfJqfeWza9B8yNKPx54h0meytw8OqRSXEUMsd+xSTbK4XKXq/OjKGU75lnXj7g5zrCrNaP3k2lr0+dm/vHc9wtdSs7uV7aKeE3cMccs9qsqPLEkn3XIU/NGTwHAxnAbax212dbXT9NUCdy/QMqXV5DaeUsjDzZ3KQRZG+RlG5yB12xr8ztjC5UH5mUG6dN1JWWlldvsv60JnJQV+vRd3/kNLGUcgDoeRyPb/AD6VooqD3b6eXr/Xc5J1HO10lbsfif8A8FV/2uv2p/ge+g/DX9kfwB4G1bxrfeGr7x54v+IvxRtdX1Dwz4N0Jp9R0fw9pHhbRNJaIa74517VtO1G53ao8+iaBommyXOo6deyatYCL5viPP8AD5PCiqtKrV5oOr+5jGThTUpQbfNOCs2m37zb91RVryj9pwdwhi+KJ11Qr4ehGlKMF9ZqzowqVGk+Xmp0qs37rS0UYq7bmmowqfl3/wAE6P8AgsT+2x4g/aY8E/szft2/C/wJqeifFfX/APhEPAnxg+GmmtoOp6F4xvYp30Gy8WaKl8dI1fwzrd1ajQ4b/RtI0fUdF1W+spdQbVLSWUWXBk/FOVZzUjRw1WbqSuowq0/Zz5lZtfE07dvmnpr6vFHh1nnDWDnmGLpUfqtOSU6mHxEcRC0nyptNRqQV+sk94p2vc/qVu4gUYAc4H4e/P06/ka+llBrzXY/PLnBatBuIYqG2lXGfunac7SvU54/DgHHSVG3urS72fQpT5Xq9/wAfTzOOn8U6ho+unXLOKKK5jREURZUfLhSHxtMkcm3bLE2VkUlGBDVUoSVmnazvddfJ+XR3NEtLJ+Z9UeBvGNn410KLVIAsF1G5ttSsg+5rS8QAkDOGaCdCs9vJyGjfYWMscoXWMuZJvR9V2f8AWwzhtVu57n4y6XamVvstn4OvzDDuOwTz6na+fLt6b3WKKMt12xKOORXpUYclFzt8Sbf5LX53+bPPrVk6qgtUm4Pyemv3tr5HsCD1781x1H/kVBXeva5/Pl/wVo8TeMr3WNG8Dya9pnw1n1X4naJY+EdfjttTvL3xP4VsPBNrr128kVneRx3Fra3k/jqLWI7t7G2tINHtJRa3DiG7ufy/jStiqlWeHq4NSp86pUJwlyynhnhaU/rEpSpVU1TxFWtSlG0Y3hDVSfMfvHhjg8BCFPFYbMZxrPBe2xtKpFctPGrMsXSeDgoVqM71cHh8HWpyTqtqvPmi43px/GH9nLXbjWv+Chnwh1nSdR0fxrolp8X/AA9o3hfwpZ2tw15psNj4x0IN4vgubKxuZbnTtM05LrWtV1BpXtbe2t7s74bUeZN8pwXCdDNcFSjl05Yj61BOrz8y9nXxEKCbhFe77GEnUnK7XIpOSildfoniRRjV4bxrq5xClhJ4GpU+rOnGM5YnCYPEYtw55yvJ4qdGOHpRioP2socrndo/s9utUgMc7gnbCgZ8c/LnHbPc57ZxxX9CVcHKEoq6vK68tvwP5AhV54+7eyf9fI47U9TsFtZblrmHZFGZCCxBwqbsADuO/wDk0o4Ko5JOy11f/DDnVt6LXS2lurPDrnxlouq217e28yyW1ndC1uJIyZPLcn5iyqCw25wRtzzV4jA+xnCEasajn215XtaStpt95thKssTGbUZU1BO3PaKlaz91u17rZfqdR8IviLpPh7x9pumDU4X0/wAWzQaFIoL7f7RnkcaK+0gAzPfSLYJk4C6hIcEhQIlgZwhOonF8qcpJXTstW9dNFqaxrRbUer69L/8AB6HuhlV/jLYP/wA9PBV1J05Jk1OAn3xn6Cu+UGsO1dWSsvRO35aniqd6qb6y57+rZ7mjevb8OMf0rypxvsehF2dz8C/+Cxus6drmofDfRfBOo+HYPjL4OsPFnjPwoPEZeGyu7awjttH1C40XUVsNTFtrnhy51Nbdr+0tJrvQ7rXrGU+VJPHNb/D8c4ihhKWWOu6tNzhiP3tKKcqdpQlGycoqacea8G42vFpqzP1nwro4zEVs1lho0KsKNTBN0MT/AAK/M6qkqjSk0k1F/DOMuSUXFp2Pxu/4JH6F8Yb39rb4n/tB/F/S7IQWngDU/CEOvT6vc6ncWvi/xFrPhlYb+41m5tIxf6vJ4a0TUrK8SJyul6Jd2STiytr+2hnnw9rYSWYVcXF16+GjCdGrjsVGMOXEVvZSUKUOaT5KcFJ1XdKKqRbvzI9DxZ+uwwOEwuM+o4PEVsTTq4fKst1pxwmHp1YzxFeSp0YxlVr1IqlGMOV8tW1nBn9P3wu8Vzat/wAJ5LK9xI1mzmGGSVZofLVA0fksrNG6OCDuUlTnqQa/YcZTpznh3SlGcJptSg1JNXS0adnt0/Pf8EjUnRp1LRbnulJNXtqo23u3pqvPoM8QeLra+8D391Y6jCNWi065b+z47e3L/aEjkIhLsVwzMoGS3IJ56mt44Koq6j7KbhdK6Wtm7aJ389/ysY+2lKl7T4ajpuTTvZNrZ9bL8tz5Q+AurJ/wifj/AFbUmnt5ZPEDXd8lwUnaCVYo0IWHc0aphPlQAcZPJ+Y3mWFo4XH0YYKliJSqUaaqwrxXPGc1q48trwVtJXdvMzynEYrHYKrLH1KFN0sRJ0p4Wd4Tp09lNtt8z15o+63dJx6GP8S/jl4Z8EaJF4ltNW87UNF1PR9Us7OLTYI7ma6sdTt7mIQlVEqSB4tyFVLKVyOmTpRwVb2qjKjOXNGcJR5b3jOEoO6Wu0rvqztrqU6SlCpNRcoyVSPuqEoSi7X1WjirrZ6u5+m9rr2m6h8bXtrDUbSabR/B1xp93Esq+Zb3g1ZENvIuSwnR4XVouGVhgrnmvKjTf1aU5Rk4tRkmle8ZWldaaq27tsctWf73kg1zRvF/4lJpp+d+h5v8avin4njltNJ8O6z9is7rV7bS5JLVvLnkV8yzSzPseWN4JLO6i8tg0JZI7a7i3XTRLjHDQXLU5N3s9rS2du9uu2p10qjjeM5ty5W7tvda2S7W8rvfufkd+3j+zZ4u+LnhXRfi54a1zWb7xx8JtDudc8L+ELfzls5tCktdTu/iP4b0+0tobi5l1bxMdRbXysgurzXNX8K+HdJ+02tpptuYvkeOuHXnmR1Hho82OwT+s0KfK5PEJW9rRWuklTUpU7bziote/wAy/RfC/imjw7xLShmDjHLMyX1LE1XLl+rynK+Hryk/dlCFe0armrQpVKlS3NBJ918Ef2af+EN0nSnsNY1i0s00Kyt9U0GynRNH1/XLvUY9audcnsnW4EV497JJ/Y13F5WoHwhNoOn6q88lv5MPp8P8P0cmyXBZbywnVppVa9VfHLFVV7TENSVm6al7lPm1VONO7co3PH4r4mnxJn+PzV3VGrUlSwkJO/ssDQ/dYVdlKUf3tVRtF1p1pLSWn1FoEmv+Dhqk2mTny9SuJ7eZboieO6022ZoUgkgUo1vJuVgzo6zxTR3MgeW3nHletKMsJarQspRkpWlrGSTvZx2v05tJLo9WfPQcK9lUina3datJ73vbfyd1oeD6VpH7TN54w8Q3k/hnQdc+EuoJN/wj8OmaibbWndZBDcC9lkKqqF45k2qVKMCD7/T0s6q4lQqqNONN0o8srWqqolaabu4rlnzJcura3aZ5lWlRpuVO9XnUpaS5XBwbvCz+N3T969+nU7Hxb4B8XaL8GfiVp/wd8IQeE/iBrWmvPolrq10J7KfxEYlWG5upEcnyfMQecUblQRu6V5+PxWPdWnisDOnVxcJU7SxrnKm6amueMuW037jklruLB0sJRjOk6bp0Jy5pQopJ+0bV5JPTa9/wVz8n/Cf7P3/BRrxt8R/D+j/FzQ/A154P1LV9ItbltBu2W4+0T6ha26tIkpb9wBJI8hjG4nPXjHqUc/zGjW+sVI4aEKcZS/dwk37sbpWk3ZXX3aHfV+p1sJ9Ug66U5SVmlF80/dT5rJtWtorn7F/Fn4P+LPCP/BRfwB4i0JtftvAnjHS/EvxRu7Gy1i+TSfEeteHdIvX1zRpbV7mK1XUbXxHLo+tNbkLZT2+s6fDK6s0pX43CVatSMIOtNxi3DkUpK0OW6utnHSyW2jVjfFUqMYzn7KCm7SU+SN+fnvdPdS7yO21fxTpGp/GTQtGkeOaPWhqbsbuSbzbO50iM3aeZHIVaBzDDJam1vo49Rt2M0D+WY/KPuwgpe4rNpKStto7PXbV/lqeNJSik9d7XXmnb5dL9b3Xcm8Y3sd1fQ6VC+y21K7Szurj/AJZrHc2ssFxKANuAbeW6JcbQBcN5bAspA4STtZaNaNddnbX+Vv79dCk043d767dH0/G2nyS76vxA8UaF4J027kaa3sbe1aaYyMY0EEVlsjt0kPylFtbC1toA3JEMI4IUKcZxsk+v/t3T87bXsbUfecVa6S96/a3+dv8AI+Vfh1+0h4N8b61efD/QNN1C+1iy0zVLnVNV8ywhs7O9W9a7NoIDcS6vcSz2WoaXfXNwLJLW3t7+wuzI0V7FcXHy9LibBY/NamUYSjVruhTqQxGMStQVajfnp0tHOtCL5YTrxSoxnKEfaPnp8/2+I4KzLLMhp5/jq1DCxr1aMsPl8uZ4qpQxDao1ar0pUJTjedPDSbxM406j9kvY1vZ8h47/AGp/Gvwos9b8IaR4C1vWJbCzu9SsNajns7TSR9she8At4ZLh7p4YbhpI55JFLvei6ZB5AiJ+tyjCOeF5neajWqp8tmo+8pKElum+bmW/uzTvrZfC46pCOJ5XKMXKMJPmlZu6teKe6uuW6srp9rn4meIf+Cnn7VGqajqMA8RaTpaR3dxH5FppgZolSVlEZkmuJgzIAFZwAG5IABxV8yvJcsVZtNW2Lhh4ckZSm/eSd7Xi7q6t1V97eTVz9af+CNnxx+OP7T3xo8YL8Q76bWPCXw00Ow8SXGpx2At7SHV765ms9B0iS5V9n227uI7jVIYwpZ7XRbsELneOHMa6p4eUdPaVvcXlGy53bX7Om+8vLXrw+FtWjPmvGHvf9vdPxtLfpsf0keK/C9p4l090MNmmsW1teJo2qz20ctxpst5GiXCwXG37Tb298kUUF+ttJG08CqG3mOMDwcPWdCrGpa6TtKPeL330ut15+R34iiq9KVO9m9YvtJbX8uj8vM/lB/a9+OcPhv8Aavvvh38RPiHc/AG4+F1jfa5F4u1yz1vwyNf8VXV0ml2FvpU11psenaloI8PNd31jqFzO+g+L4b/SxpbXMdg7yfOcT8XV8PWeGyTE1MNi6bbxFSeFlzyjHlcI0Y4ilKNSFRt3qRpyUowjyT5ZXf6LwTwLQxGD/tLPcBDMcFXio4SjQxlOUIykpRqVMRUwuIjUoSo2SVKpKEqVScvaU1UilHhPDn/BRrW9S1i58PeA/iX8JPjnJ4ed4b6W6s7nQvES+VYeSkrHQtXFtdRLHc5S8s9B+zSCKF5JJpftEA8el4kZ7RjSWNy/CYhKzVXkrYOpV5dLu/tKN5tWny0YWtdRR9HV8IuG8ZObwWZY/AyTu8OqmHx9Kjz2aSv7OvyrS3tK9R3bTk0lal8Y/wBsb4jfFHTLvSrrwXovh63vo1a+utP8WHXlmneaV7kGyfT9InW3uIZJYZIZJpcxPJH5oBEiGaeI2IxmCqYfCZa8DXrwdOeI+txrOkpLllKgo0aLU+W6jJtezb5o3kk1vkPhDgcuzOli8fnEcywuHmqkMG8vlh/byi+aEa/PXrRlTjOznTirTiuWVoycXzf7Of7YvhH9nzW/FK/ELw7fata/EG+sZb/xloT6gmp+GoIBloP+EcuINUsdagn1O4m1HVJ4NZstR8xvtFppV/dJIt34vCPEmXcPVq8MZgpzeOlGNXMaU3OrQp/ZhLDuCcqKm3UrSpTlVk3zclRwjF/R+IHBWb8V4XCyyzMoxWW06lSjlFSmqdLEVXFpzji41Gqdd0UqFCnVpKhG3I6lGM5zj9teMviz8NvEcOpatbeCfG/xJstT01f7L8VeEPCd1ruhXGmXUD3VrFb6la/K05gu1llULGUWaM+WgbFf0PkuKSwcpUMRTlRxNaWJp+zfMpQnRoxi4zV+aEowumtGn6n8mZvgK0MdKniKFWniMLBYatTqJwqUqtOpU54Tho1OM5OMk1uj84/Cf7NHgz4u/ELTvB/gj9nT43XHiLxbr8dlavJ4W1XT9MtJNQu9smpavqVy62ejaJp6ytearq19JDY6bYxS3dzJHDExrSvWwNJTqTlTWjlLR3k3rZK2snrZLW5rRjiKkY04pNKySvdJaJXb2aW/zP64f2Mv2Q/h1+xj8H7f4ZeBLWOXUNU1ObxP458RsZ5LrxL4qvLa2tJbjfdSSSwaXptjZ2ml6PYR+TBDa2zXr241PUdTuLn4vF4j6zWlUUeSG1OG/LFbXfVvdvXV2Tske7Rpexpxhe7W77t6v5LZeR9aVzGp8UftofsC/s/ftyeELfRPizoMlh4w0G0uYPA3xU8ORafB468GNcTxXU1vZXd/Z31lquhXk8KjUvD+s2l5YTRy3Fxp50vWDbava+dmOV4XM6Xs8RGSlFNQq03y1IX3V9VKD6wkmuqtK0l72Q8R5lw9XdXBVIypVGvb4WtFzw9ayspON1KFSO8alOUZaJS56d4P+ZzxN/wb3/tQeD/FeqTWPxM8E+KfA9tdzvoXibwppmqt42eyCEW7X3hCGPw5LpGouGMZXSPFHia3iZWd7llMaV4mX8C4evXf1vOY4WkmuWEMPJyqJfzzq1HRg3rdNSVrW12+3zHxYq08PH6nkU8RiGlzyrYqPs6c9rxjRpqrUS0s17NrW72ZwfxY/YR+IPgPRo/D6/FH4hWl5p9lbfbdV8ceErSRYrq7uTEkS2Uun6RdeV9nkieO1nvJ7uACRbueS5LKPpa3hrw7WpReGx2MpTiveqKrh69Kbbb5nTjTpOL7KnOMbL4b6v5nCeMXElCpP63gMBVpTk3Cl7LEUKlOKStFVJVKrmlrrOEpNy+Llsl458G/+Cafx2+OfiO88K2v7Rd/YaYPD+oa4+oaT8HX1lzdadr2haT/AGVEIvGEAjlvrLVL25gnSWZUl03yWtnjlMkfjz8PMuhPkqY6o4rXndOC2lZqzq232966ut2e5HxhzVR9pTy2hGS9zkjWmm7xfK0/ZT5lrezWtrprVn9MfwW/YKl8OfDnwf8ADHT7LXfCPhDwjoWn6Haanr2u3A1rUIrWJUudQvNL01rO4uNX1C483UL5rhNHt5ru5ndHTiIff0cbgcuwmHweEp3p4WjChShC1uWmlFOdTlXM2l70op3erWtz8or1syzHMMVmeJnFYjF16uIqzqU4VE51Zym1GnNS92N+WKlb3Uk3Jps/R34TfBjwV8HNGOl+F7a5nu7hFGpa7qtzJfavqDKdwR7iZm+z2aNjybK3CQqFR5fPuA9w/j4nE1MTPmnZJX5YR+GK+erfdvX0WhvSowpJ8q1k7ylorv0WiXZJJI9ZrnNQ/9k=",
  };
  const rows = [
    {
      receiver: "Oripeloye Timilehin",
      img: tableImg.link,
      "c.s": 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
    {
      receiver: "Oripeloye Timilehin",
      img: tableImg.link,
      "c.s": 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
    {
      receiver: "Oripeloye Timilehin",
      img: tableImg.link,
      "c.s": 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
    {
      receiver: "Oripeloye Timilehin",
      img: tableImg.link,
      "c.s": 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
    {
      receiver: "Oripeloye Timilehin",
      img: tableImg.link,
      "c.s": 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
  ];
  return (
    <TableContainer className="table">
      <Table
        aria-label="simple table"
        style={{
          width: "100%",
          height: "auto",
          fontFamily: "Manrope",
          boxShadow: "none",
          // marginBottom: "20px",
        }}
      >
        <TableHead>
          <TableRow style={{ height: "73px", paddingLeft: "40px" }}>
            <TableCell
              className="tableCell"
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#8A8B9F",
                fontFamily: "Manrope",
              }}
            >
              Receiver
            </TableCell>
            <TableCell
              className="tableCell"
              style={{ fontSize: "14px", fontWeight: 700, color: "#8A8B9F" }}
            >
              C.S
            </TableCell>
            <TableCell
              className="tableCell"
              style={{ fontSize: "14px", fontWeight: 700, color: "#8A8B9F" }}
            >
              Amount
            </TableCell>
            <TableCell
              className="tableCell"
              style={{ fontSize: "14px", fontWeight: 700, color: "#8A8B9F" }}
            >
              Date
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow style={{ height: "73px", padding: 0 }}>
              {/* <TableCell className="tableCell">{row.id}</TableCell> */}
              <TableCell
                className="tableCell"
                style={{
                  width: "150px",
                }}
              >
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      fontFamily: "Manrope",
                    }}
                  >
                    {row.receiver}
                  </div>
                </div>
              </TableCell>
              <TableCell
                className="tableCell"
                style={{
                  color: "#42be65",
                  width: "80px",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  fontFamily: "Manrope",
                }}
              >
                {row["c.s"]}
              </TableCell>
              <TableCell
                className="tableCell"
                style={{
                  width: "20px",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  fontFamily: "Manrope",
                }}
              >
                {row.amount}
              </TableCell>
              <TableCell
                className="tableCell"
                style={{
                  width: "324px",
                  // marginRight: "30px",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  fontFamily: "Manrope",
                }}
              >
                {row.date}
              </TableCell>
              {/* <TableCell style={{ width: "30px" }}></TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
