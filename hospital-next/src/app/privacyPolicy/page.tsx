import Menu from '../components/Menu/Menu';
import HeaderPage from '../components/HeaderPage/HeaderPage';
import { url } from '../utils/const/url';
import styles from './page.module.css';

export default function Page() {
    return (
        <main>
            <Menu items={url} />
            <HeaderPage text={'Конфиденциальность'} />
            <section className={styles.container}>
                <div className={styles.content}>
                    <h2>Политика обработки данных</h2>
                    <h3>1. Общие положения</h3>
                    <p>
                        Группа клиник КДП очень ответственно относится к вопросам защиты данных. При отсутствии вашего
                        специального согласия и с учетом наших интересов в рамках законодательства, сбор, обработка и
                        использование персональных данных, полученных с помощью этого веб-сайта, будут осуществляться
                        только в объеме, необходимом для предоставления индивидуальных услуг и предложений. Если для
                        доступа к индивидуальным предложениям или услугами, которые можно найти на сайте, требуется ввод
                        персональных данных (например, для обработки письменных запросов при заполнении формы обратной
                        связи), мы будем учитывать и использовать эти данные только в целях, для которых они были
                        предоставлены.
                    </p>
                    <h3>2. Сбор и хранение персональных данных, а также характер и цель их использования</h3>
                    <p>
                        Персональные данные будут немедленно удалены, как только их хранение перестанет быть необходимым
                        для заявленных целей и, если их уничтожение не противоречит установленным законом и правовым
                        обязательствам. Ваши персональные данные подлежат обработке в следующих случаях.
                    </p>
                    <h4>a. При посещении веб-сайта</h4>
                    <p>
                        При посещении веб-сайта, наш веб-сервер временно сохраняет данные используемых по умолчанию
                        текущих подключений запрашивающего компьютера, а именно интернет-страницы, которые вы у нас
                        посещаете, дату и длительность посещения, идентификационные данные используемого браузера и тип
                        операционной системы, включая веб-сайт, с которого вы заходили к нам (т. е. данные журнала
                        сервера). Дополнительные персональные данные, такие как имя, адрес, номер телефона или адрес
                        электронной почты, в этом случае не регистрируются. Кроме того, данные журнала сервера и
                        персональные данные совершенно не связаны между собой.
                    </p>
                    <p>
                        Мы ни в коем случае не будем использовать собранные данные для создания вашего личностного
                        профиля. Данные хранятся в течение 13 месяцев, а затем удаляются.
                    </p>
                    <h4>b. Файлы cookie</h4>
                    <p>На наших страницах используются файлы cookie.</p>
                    <p>
                        Файлы cookie представляют собой небольшой фрагмент данных, сохраняемые на вашем носителе вместе
                        с определенными настройками и данными для обмена с нашей системой с помощью вашего браузера. Они
                        служат для того, чтобы сделать веб-сайт более удобным для пользователя и эффективным в целом.
                    </p>
                    <p>
                        Вы можете в любое время удалить файлы cookie в настройках безопасности браузера или задать
                        конфигурацию настроек браузера в соответствии с вашими предпочтениями, например, совсем
                        запретить использование файлов cookie. Как правило, функция справки на панели меню веб-браузера
                        показывает, как отклонить новые файлы cookie и удалить уже полученные. Однако, необходимо
                        отметить, что в этом случае вам, возможно, будут доступны не все функции нашего сайта.
                    </p>
                    <p>
                        Файлы cookie, которые мы используем, частично являются сеансовыми и автоматически удаляются с
                        жесткого диска после завершения сеанса браузера. Мы также используем постоянные файлы cookie,
                        которые остаются на вашем жестком диске. При следующем посещении веб-сайт автоматически
                        идентифицирует вас по предыдущему посещению, а также «помнит» вводимые вами данные и
                        используемые на этом сайте настройки. Файлы cookie хранятся на жестком диске и автоматически
                        удаляются через определенный период времени.
                    </p>
                    <p>
                        Файлы cookie, которые мы используем, не позволяют идентифицировать субъекта данных. После
                        включения файлов cookie присваивается идентификационный номер. Привязка идентификатора личности
                        к этому идентификационному номеру совершенно невозможна и не осуществляется. Ваше имя или
                        аналогичные данные, позволяющие сопоставить файлы cookie с вами, не сохраняются.
                    </p>
                    <h4>c. Анализ использования (отслеживание)</h4>
                    <p>
                        При работе с данными, перечисленными в пункте а), мы используем инструмент, заменяющий последние
                        две октады вашего IP-адреса на нули с целью анализа использования нашего веб-сайта, а также для
                        установления требований к дизайну и дальнейшей оптимизации нашего сайта. С другой стороны,
                        отслеживание используется с целью составления статистики посещений нашего веб-сайта и для
                        оптимизации наших услуг и предложений.
                    </p>
                    <p>
                        Если вы предпочитаете, чтобы ваши действия на сайте не регистрировались и не анализировались, в
                        вашем браузере можно включить опцию настроек «Не отслеживать». Обычно это делается в настройках
                        браузера.
                    </p>
                    <p>
                        В дополнение к внутреннему анализу использования, мы применяем отслеживание с помощью
                        инструментов сторонних поставщиков с целью лучшей адаптации нашего веб-сайта к потребностям
                        наших пользователей. Кроме того, анализ статистики используется для улучшения наших веб-сайтов.
                    </p>
                    <p>
                        Следует отметить, что наше влияние на обработку данных этими внешними инструментами отслеживания
                        довольно ограничено, и они предоставляют нам только ту информацию, которая соответствует
                        положениям о конфиденциальности.
                    </p>
                    <h4>cc) Веб-маяки</h4>
                    <p>
                        Мы используем на нашем сайте веб-маяки, пиксельные теги, прозрачные GIF-анимации или применяем
                        аналогичные средства (далее «веб-маяки»). Веб-маяк представляет собой однопиксельный файл
                        изображения, встроенный в наш сайт. Как правило, веб-маяки незаметны пользователю. Они позволяют
                        нам подсчитывать количество пользователей страниц веб-сайта, которые получают доступ к отдельным
                        страницам нашего веб-сайта при запросе «фирменных услуг», и составлять статистику использования
                        нашего веб-сайта. Данные хранятся в течение 13 месяцев, а затем удаляются.
                    </p>
                    <h4>d) Регистрация на одну из наших рассылок</h4>
                    <p>
                        Для отправки нашей рассылки нам требуется ваш адрес электронной почты, а также подтверждение
                        того, что именно вы являетесь владельцем адреса электронной почты и хотите получать рассылку.
                        Это осуществляется с помощью процедуры двухэтапной подписки. После регистрации вы получаете
                        сообщение на указанный электронный адрес. В этом электронном письме вам предлагается перейти по
                        содержащейся в нем ссылке для подтверждения вашего согласия на получение рассылки. В дальнейшем
                        вы получаете рассылку, на которую подписались.
                    </p>
                    <h3>3. Наши контактные формы</h3>
                    <h4>a) При заполнении формы запроса</h4>
                    <p>
                        По любым вопросам у вас есть возможность связаться с нами с помощью формы на сайте. При этом
                        требуется указывать фактический адрес электронной почты отправителя запроса, чтобы мы смогли на
                        него ответить. Дополнительная информация может предоставляться на добровольной основе.
                    </p>
                    <p>
                        Персональные данные, собранные нами при заполнении формы запроса, автоматически удаляются после
                        выполнения запроса.
                    </p>
                    <h4>c) При использовании функции обратного вызова</h4>
                    <p>
                        У вас есть возможность оставить на сайте свой номер телефона с помощью предоставленной формы и
                        (по желанию) ваше имя и необходимое время звонка , чтобы наши сотрудники могли связаться с вами
                        в указанное время.
                    </p>
                    <p>
                        Персональные данные, собранные нами при заполнении формы заказа обратного звонка, автоматически
                        удаляются после выполнения запроса.
                    </p>
                    <h3>4. Права субъекта персональных данных</h3>
                    <p>Вы имеете право:</p>
                    <p>
                        запрашивать информацию о ваших персональных данных, обработанных нами, в соответствии со ст. 15
                        Общего регламента по защите данных. В частности, вы имеете право запросить сведения о целях
                        обработки, категориях персональных данных, категориях получателей, которым были или будут
                        раскрыты ваши данные, планируемом сроке хранения данных, имеете право потребовать исправления
                        неточных данных, удалить данные, ограничить их обработку или отозвать согласие на обработку
                        данных, подать жалобу, узнать об источнике предоставления ваших данных, если они были
                        предоставлены не вами, включая сведения о функции автоматизированного принятия решений, сведения
                        о критериях сбора статистических данных и, по возможности, все существенные детали;
                    </p>
                    <p>
                        требовать немедленного исправления сохраненных нами данных, включая их дополнение в соответствии
                        со ст. 16 Общего регламента по защите данных
                    </p>
                    <p>
                        требовать уничтожения ваших персональных данных, сохраненных нами, если обработка данных не
                        будет необходима для выполнения права на свободное выражение мнения и не потребуется информация
                        для выполнения юридических обязательств
                    </p>
                    <p>
                        требовать ограничения обработки ваших персональных данных, если вы оспариваете их точность, если
                        их обработка является незаконной, если вы отказались от их удаления, если нам больше не
                        требуются данные, но они необходимы вам для предъявления, выполнения или защиты правовых
                        притязаний
                    </p>
                    <p>
                        требовать получения уже предоставленных вами персональных данных в структурированном
                        универсальном электронном формате
                    </p>
                    <p>отозвать ваше прямое согласие на обработку данных</p>
                    <h3>5. Безопасность данных</h3>
                    <p>
                        Мы принимаем все необходимые технические и организационные меры безопасности для защиты ваших
                        персональных данных от потери и неправомерного использования. Благодаря этому ваши данные
                        хранятся в безопасной рабочей среде, недоступной для всеобщего ознакомления.
                    </p>
                    <p>
                        В некоторых случаях ваши персональные данные шифруются при передачи по протоколу TLS. Это
                        означает, что если ваш браузер поддерживает протокол TLS, связь между компьютером и нашими
                        серверами будет установлена с помощью надежных средств шифрования.
                    </p>
                    <h3>6. Обновление политики соблюдения конфиденциальности и внесение изменений</h3>
                    <p>
                        Политика соблюдения конфиденциальности в настоящее время считается действительной и имеет такой
                        статус с сентября 2023 года.
                    </p>
                    <p>
                        Внесение изменений в эту политику могут потребоваться в связи с дальнейшим развитием нашего
                        веб-сайта и сопутствующих предложений или на основании предусмотренных законом или
                        административных требований. Доступ к актуальной политике соблюдения конфиденциальности можно
                        получить на данной странице или запросить в нашей компании в любое время.
                    </p>
                </div>
            </section>
        </main>
    );
}
