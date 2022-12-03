const getSumPriorities = sacksString => {
    const sacks = sacksString.split('\n')

    let sumPriorities = 0

    for(let i=0; i<= sacks.length-2; i+=3) {
        let sharedItem
        for(item of sacks[i]) if(sacks[i+1].includes(item) && sacks[i+2].includes(item)) sharedItem=item
        const priority = sharedItem===sharedItem.toLowerCase() ? (sharedItem.charCodeAt() - '`'.charCodeAt()) : (sharedItem.charCodeAt() - '@'.charCodeAt() + 26)
        sumPriorities += priority
    }

    return sumPriorities
}

console.log(getSumPriorities(`vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`))

console.log(getSumPriorities(`mmbclcsDHCflDDlCrzzrDWjPJvjPvqJPjfpqZQdfWd
NNFLnFRNhgNQtMLSFSgwSwGJPZWLPvjpjjJGZJPvWPvJ
BnwFNgVVhwNwVQrmzbrrCHVTmDsm
CTsVssjPTWPbzhfbfqqpbqJq
RRttdQlRdnNpdmwBnBDhFrGrqDGBqJJfJD
HttgcggdNwQtgcpTsvjVPTcssjsv
bWrpnrpPcFNbfPtwVPddVVDw
jLgqqJgjZLhHjRqLHLjqHgftpmJVtTmwQmtGddwwDVJm
HhzgshZLpHLjqhLLZRZpLRbbrlBNsrrNsFWcCvvFCcNN
PCJJfJhjhzjjdBVBcd
RnNnMHnRNtWnBSQHVbqSzFcq
ZlnZZZNmLrNrgZmmccGJwGwmGPJs
hFZLsjjjMzwPPjqw
SQtTcpWWcpMSDlQpDCQJqbHzdSzPzJvPPwqqvH
tVfpGWGDVlCGGDCpVWppVcrZFMrnmnLfsrBrnngLmMBh
PFPhCmpfhSMWnmgrtgMW
RRQdGQvTQRzQDGQTQcRqTTQLvsntnltvrWZlsWlZftntrMtt
NQTzfGfzcdTBhPJSNJbCCVhJ
sbtqfrqNfcdqsJrfhzQmzhpvzvpQmpNG
SHsSDsZVHBHnRZDBZRWSVDnwFhzvphggwGhQzQhgwzmmPzmg
jjHVHBlHljMsJjbbCcdttc
NccBbvbNZbbvBGPVTGhhlCZCPg
tdWHQtLLMrrdWQRqWrMrMrMPsTPThDlTssFFCFCVTDtCDC
zzWmMQQLVQrWrbBczNnwNbnpnN
THGhBHgHThvnHRrQRpMNSwZSMrwD
szsCzWljNfVFFVllPPzzVWJMJZQMJbpSrwQCCJMDZbbb
WzlfFlflfcmfsFPVfWVVhnNgchHndHgdTnqdNHTh
zPhDwsWgszftMNfPjjLL
RTRbbJFHSrqRRrHRrjGQBnfjQQMjLnmNnF
ddpNSNNpSdWsvpllWzsl
FgDgbSMnhhntCLCC
HlqzJgPfJJgmrthhrtTLqL
fjfQgJPGVjwGJcFMcSvdScWjMD
pnFwRPlVVlLSwpGbvSmZHmbbdbHm
sCzTQtzrrQMzpthTdvbGHdvdHNsZqqqZ
ChTTWhWBWCDrrTrjCrhtLwwLFgfLFgjnpfpwLnVg
MRDfBDMJsQdmGWsM
pFPqwswhGzWSCwGN
jphpbgbqgFnqjjnthLtJsZfJRHfllfTllDLflJ
sdbLCqnbllplrdrsqbZHRPRBcBcBZBcHcZrM
JJFwDDQmzfmhmWhJhwFWbMbcNBNRBBzbNPHcMHPj
DFWVQVGGGbpGClllqLSl
mRmFhZRsmFJfFRzwRrFrqmRFtNLLDTPccVqVtGTLDnPccPDN
SBddBlZMjpQvvBbZvVDTtDTDDVGnLTMPVT
dCHWlbHbdbllsRCCgFwrrZCJ
hwvwFHhlTLwpLDQhpHwTwBLSfvzSZZsvVsqCGqzZSfCvVG
WNdtmjPjcWdWJWntcWbjzmFzrrVrzsGzsVsSVrZZ
PbJPntMRbbdJbcNPcNFjnhlwwgpDHRBpggTlQThhpQ
mJvRGHfWmvWJJVmZZnZVffpglGggrTLNzLwNLrszzNpz
FqFMMShqjcMcqPbbjPthNgRggPgLwPsgLgszwNpl
DFQqQMhRhDRmWndDnJvmWW
jVzfvzSVpnnNSGjjVpNlSNDzqBBmWCBtWWtfFFCCmPmJCCJW
HLrRLhwrMZbHrWqWBhGPCGBFJW
wHHMRMQRQrcQRTTcHrwwRcQbDnpvnppzGSnvnSNzDSNTpjnS
qzrgfppGzPDJHfbZbHZn
vTsMvMTclhNlFlFhdhdqHHmHJSJDVJnJFFwJHHDn
slccWTTTcdCcCqRQPrzgBWPPRz
thfHHdDwbnVzwwdthZlqjZmmTmjfZcfMQl
sGFGJFFvGpFPCJvLPGPgZlpmlTMcmlmZrmMjcr
sJGLSWRSPBBCCPRFWPsNBNwMNNVMNwBzzMDhnh
RwJMwdbzMGWbLtLVQpPl
gqNfBmBjNmcCqjqjQllWhhQlgDQtpWlh
cfccjmcNmHrHBmCBcTMGtTJtZzrTvddRGR
vbbvqMhcrqMQQLHHvFvHHvpPlnPLfVfPnfmwsNwwwlnVls
ZdBZZgDRDzBRJWBzzDZjDDNWNnNnPfwNPwmSwlnCnfCW
JgRggTDtZmmbbFqrvT
lSgzfSzgGcNfDPsbMpspbPnnrrVV
FmWFBFQHBJJBmmWJFHWFrwtsVrMbnrVVwwwpWMMp
FFmmJmvZjQBRQRRQZQBvNNglRhDNDffDSDSMGlDD
VQPBCZVfHQZGRVVpmzPFmgSgbSPTFb
NcwLjcWnFhCpLvCF
tNCDtsqltDwtWdncJZVJVRMGdBQffHZH
pTzgPsLQfMLqTVFLGbVbbFVJVF
ZnjgjvSwNNbFJVwN
jWcCnWHWRvWRHHnWRWjvdZnZtspMqfzrMqfQtTPQgfPzfzcM
CTqHMNSSVnpjNSTFzMwPdslwnlPccbblgcbd
WDLqvLQRfLBgbJPwlWgdPd
QRBqqDmZZRBGGfCTpCCSMSmzjSpz
bPlRhmnPhTwhrvrlRrjgLjgsLpszFldgFlgF
tGHWfcQHWfLZnsLQnjpn
cVGtCtGGcNWcWtBStqnWrwmvmbmJwJPwbRBhRRMb
BjVTVfBsLlLjLcBcZDRJpnJRDPRJqlPRqJ
SzbQMQzFgfFzmMSrbzGpqqRDtqmnvDHtvppHDm
CrSQSdgrWdbFQCWggjWZTfBWcwBcTVBjTs
RtqdCqCTbRfRbbHR
FhwWWqgGJJgJHLHPFFsDbsFP
MrpmmwqhMmJMwpvlNvtlTrvtZSSr
VscvcmcmbhDrRMCCJlqnSlJnSljR
FWdwWgpZgdBLTgTWFwZBgWpjbCNqPptCSlNCStnSJJNPPJ
FdFWGgWTQGGbGvvDHDHzMD
WhhBJrBqBchcQBBqcqqGRZRlrtStlSlRszlzSSRl
fHdwgdjbNCbCCHNgPgHNPNplSRtQtltlRDZsQfZsZMRQMR
jQbQNwVNvWFJvqcV
bjbmmgSjwTWqWwWqcw
sQGfPZQDPqMMWWWd
fqBDfqqZZGHGDsNLjtmlttpgBllpJt
ZDmCWtftfWBLfRDWwbhqcNNtqwjtjwqt
SnTTsnlPMTlSSsGMMSddSbHjhwJwwjPbcvHwLwcqjj
GrFGzSgnTzLgDVfQfQrrDDfm
PngprCCmcBDssRFBSbFRRs
fjwHtjfNWfGwHfdtjGMdWSSdQTsQRLFSSslPSFTRlS
jGjMwMffWHNZfhwnDzqCpZDgrqCcPr
qzGPbzbDZGSPvpvrTvQsQwLWWNLj
tFddBhgnVnMMhBhLJWLwjQMwMrMLwT
BHFtVHgtmlhRRZmSTDTpSq
ZwzLWWWvWdSJdJQwQLzBqqbbhhCcNzchqCNPhb
rHfDRfHGfHsGTPPmhmrrNhjmNg
GlfsfRTfsfRtsstfDVHpGsPSFQJSWQMJwdSLwQWpZZLd
vnvJvpJtQwDBTljHlLHhDL
zzGqMwqMqbfRfVGzFmLmLTLddjmTSRLBBB
zGfrbqzwNvPPcCtr
jwCwSgvPSmCwSqwgbCRQGvsRVnddGZdflsfB
MhzHLWpMWHHzNzMccDHdnZVZRZRGQnGlGRGLsZ
nccNHTzWHDcMWHcphpptDrcDJmSgFTPjgPFjTjgSbqJSJqbg
bVhPWqBBbdbdPqVVqhSfpcmFsfwLnmmjnfBFmn
TDWDGzgRvrNJJJrzzzGspwpjncsncFmwFmsNfw
vMDgDJRWgDJtHDJMMPQQMdQlqdlhZZQbbC
SpdpQqLwrDcmPhggcS
ZHCZstHMhjGmtPDc
NNnnRHMZNzTMHZZTTsZMvvRhJJwWzBVLVQJJqWwVhwJpdJ
mrlMQlQPPPhhCbZRNpRZcffmFmgc
VvJVJqDqvqjDqvtVttVSHTTHLLcggBNBBSRRFfRLncfFLpBB
jHVHvdDHtJjtDWjwMhWwhwwwlNswPr
MJvzvFLhbTnJCvRwWSTmSWWWmRpc
tlVlNqBsVNNBQPrWgqmcgfwpcWpdcg
ZBjHPsttQrPrrVsBQpVJzhZhvnnbMMLvFJJZMJ
hBfJffJJNhnDlmQdnmSGcd
sQrCpRsPCrwFZQprpQCzljdjMMjMGGdGSmgSFFDS
zZpzQpwzHRPPTrQwCpRzWZHqLVvtBJvbBtVJhJLhHtLbVv
DsPnQGnnwlVJbSsb
HCfCfTDMTfHvCWMZDcRVVSwpbtlhVZbhhpVllp
TmCMTvfjRCCvcrgNNPQDmNzrLF
ghwNtnMMRTZtwTphjjBQfLJjfJFdSBTL
lldzbqzrCrfLJJBBbSWj
DCvlvqvshNhRndGs
rWwWWDJWWrFLdRWtRhFZTCbCSqThFTCbmm
BgMvSzvMpVpBlQNQVgfqhhGCbGbThQZTcbZTCs
nMpfjVMnzlgRSrnHnwdSDH
blFhFgFgPLvjDwNvWPnD
qMBzMCCzZMzJHRrzMFZsnFjQdZnvvNvvWQ
FzpMpGMRrlSSghLhtG
hDlVfDdSTjTJwjMTZT
HgnqtGgQRgRHGtrgqgSZJCrwBZZCrZwWJWjMWZ
zqRbGNSbbGRRQGRQFzddfVDLVhhfhddV
JwhLdLNLbwmJggCbbbhjHnDQNZWQWQjWZZPlHQ
GStzfBFzBMGMftpGcFFQDDjDQfZPfnnmDPfZZj
FqMBtFstpcTMBMSBGSBtqMhrwJLLTCbLhJbrhTCmrChv
WwWnTNVBNvWwBngdSqdRJJzncLSLpc
HPMZlGZQGtQjPdpqScpdjP
GltlGDDCMMplHCDphtbCHDwmWNBgVgvWhrmWssTBwWWV
clNNclslcLVWBNlGcVvdSHQvTMHZZSdsdQHM
gGhfpRwRZHMdJgZJ
fnDrpDtDrrWGcWVW
zdVzgdPSWRsHVzPsRRPHRHRRntnQrbDmfDfwfQwwZwfnbgMD
qNCJvjNLqjNhBBGjBvchhBCqffbffDGMnbwtfnbmQwQnZQMt
jccqJBvCjqvLTLJhJZpsPdSVdPszPRFssT
lDLvltDpvSpqGjVVMljGjW
zrdnswzcSzCgrdnBBjVcBBcjWTVTGb
PZgFdgHHnrdNDPvvtfNQSJ
GlLFbFNFtzcvddVpJVfGsCCC
PWhhMgWTTnhQrqMHTWqwddCVjSwQJddpBdQffp
WqJZDHPWgJrHnPqhnnqLbzzcLmbFDNmcbRzbbN
vtDcSfcWfmfTSGwvGDwTvFZVppsszCsVVVFjVzSVSM
NrrLPhdBRJLbPhrrRJwhBFZsFVzQzszsZzMCZjsJQF
glgwPqPhrRqPqBdNLwBrLRtnGHnDGmDqHWfGWfGcncHH
BtSfgpgvQhlSlwzZ
VHRmVzMPdPVRmcdhQwQwhClNNNCb
PcPMRWrVRRHTMDRVLPVzBnnJprjppBJtJftvpBfp
RpgBRVpLgBpDFCCPPVGvPSVVvb
dHrMdlWwwljjrlHrqmWjmWlGNvNSBBNhhSCSbSvNtNvQGd
TfmjqrwqHmqHrqlHwHpgfZFBzJgpZnpDcDBZ
NWTdFWlSMMMWTzVzdQfVpVDwwf
RHrrGrLqJLBqgpDgQfwfffHz
cssRRsBjvrGRjLBLrZcBvBqWPQNnlWTmSnjFllWMnCTFll
DCCDbHDhgbtCLHFHCQdQdSVfbNMdnfcSMS
ZZjPsqRZJlJlGZPTTqqRwJjZQVnMszVfzdSVScQQSQcNQNfM
mlGJJqmZjBZPhLBrgrWHFnDL
wLpCpDmmLwplgwVLwLwVgLLbWWJvJRTsRvbbJWCRsfbssv
FHHPFZnnhZQrqTTlSJRSrlfvrv
llZlPQFcZZHchjhjPqnjNFqNwggmDDwVNBBDwtpGMVDwDwVp
CctttjCrftNrBZpPgpgbNqdq
JhMwhMTGhMVhwDDMJJHGJJJBldWggWglddlbqlbPHbfqgf
DvJRMJVVJMTfJtnrnRjCSRFnrL
snDPGSQPnSSQQFwFFdzWFvmCVmmnjmCJjHjbZZhHZp
clgrgrMrRfqRlNggmhmHrhvVbpCjCVvV
fNgcBgqqLMqRqgLggtcTftBFdDFWQzDSQWPPGwWpwtGGsP
wSJWDCbwVdQfbffHfZZr
glgTBzzPSFhLFRvRQnZspZQpnvRp
qTLqglLNFqBqVMJqwwMVcS
rCWNCsrGrGGHrwQQHrfNDfvgLmmvMmLLMpmLvLPpPgww
djcdVdqJJcqqBstdBczbStThPPMPghvSpRgmlvghlmLpLp
qtjdBqzbTTtzTJTzVnbBdsNfDHZGGGDDnGfNDHDHFZFD
mlzzVHZmzvHflTJHqlJcZTvdcdCCPnddFGhPdBGhMFGCGc
QDRrWSprdqqCqDhF
NWtQNRrgWjpLjLsrRrQpfwVVqvwHzvvmVszlvlvm
DmDDtBDStSLcjLBDhhhmfnNFNlJJMFWFHSMWFpJNHp
PgMCgVgsCvVwRVRCwvgTzCMRWWwdnWHpNHFwWJJnHdHpprnp
RgZvvMbsbPCRGRTVPGmfBqDDqmthDQcmcZDc
WrfWpwwCwpdWCMBzqbtpjVbqzVqp
RvQQSFJNFZNNLPGbMMPqGtGPzF
DRvmNhZvJZmNmLcDZQcQNRfnnTMwrMHnfTrTCslsclCn
httbcnSsgtVMsnssnzghmmHvNmlHVLBHBLrVGGLN
QFpjZqpqWddZjjDWPWPwjFpfGLBfBBrrNLlBBgGrLCLmrfBB
QRjRjwjwDhbRTJnhgR
FTBTZqFVJnVTTPBTVmFbNjRffzrRrNQrPNQbzh
tCWwHMLCLDstlzdjwbzbQhRl
GvtChDChvtGSnZqnTVvBVF
spnFVspFPScprWrGvTpTWpvW
CgMqCqPLfqBBJGHlMrrJrWWl
ChjqhCtgdLPSQhQsRnVQ
bCQVZCJcrSSStrWTdhQqhzzMdhMz
lPDwNfgpDfBNgfnlDPRDpLWRhLbMjzWqMqWsMLLhLz
wpNPgPwwBDfvBnfgBfwglHDCJmtFGFmGSmCVrVCGbrCcFv
zNMJCHVJQmNLQFhZ
PPRPdGcRdPPjfjflqdjPDPTZQrhTFZFrmQZQBGZCFmLL
CcWfjjgWtjtMJWzVnSJVzJ
LjhDjVCVsjNfMsMQ
SdRpGSndZnlgpdSFtrQMtqNZJtwrMfQQ
cdRpcpnggRSmWpcLDHCCHfhBmPHTCV
zpmsJlptmfNwwFswGHThRcTqqHqhhWCWzh
SLgLMMgnPbSLPbPMDqZZcTWCnZWtRcWCZC
MbbvQtMVSLVrDMvSMSvSlwNsFNJspJFfNNmJrGGf
wvcQjfjQvQDJvwNwRdpRScCHbpdMbSpl
rfrZzrzWWmzlRpMMdpzd
LqrmFrVhFJjNfFfw
fVflVfmjQtZhzdrdlN
HwLLJvCcpcbRvDwpDvDCpqtTPPMNWTzTrHZTMPzPMPdH
LbvbJqgcqbpJLwvbbbmsmgVGmQmnjdSfSVjV
FngtfmfTTSFjFDnfjDbwnGzzGBGzbVRwVcwz
WWMrLLZLvZMWsrCcjzBGcpzLcGcVcB
NhMWllrsNZNrWZWhjCmmSmfgSTFDHTJfFSNq
lpqpqlhTSZqfZlwthPHsHcdHPhsCHLrP
zVDTjMgFbscczPbz
jRRmvmngNngqTZBqNlftTJ
wrMrJZPPrNZPZzhzMFPlDqSllsLSbWDWlWqNbb
VpGftgghtgQfVBgdnpBBngtWDSRbbSqltbRblDDDtqSlqS
gVggVgpVHTpmndffdVQVTVggjMwwjjMCjJFhPvZMwHvzMzjC
CtQPCFVlljWrNhTmCgLL
zsZbsnsqbMznDGNrrTqTLqWRHghN
zsMMGMSssSSzMGGMcvDGJFphFwPPvPvQfJppwQfj
njfVlRDDfDwHSfwVwSLnQZqGBbGsnZBnbGqZMbbpGG
zvddNNdWFgTPFgWNvNgcZqZbbqMMgBpsZrRZpgGG
CPchdcRTcNvvTWcmTNDSSfjwSDHCfQwlJLHl
LPmccvvFzzLvvQSzlFvFSSQDDtDfdDVdnDTBDsVTjDndlV
CbgNZWgZrbbqhrgTnVjjCsGdBfCfTs
BhwRrNrpQvLzvJSw
DpGFVsprFpTBJjsnJnnhdjWh
fbHCcbVHCgfMLwcqfLwgNdqhjRhnJQQdtQWnnSSJJj
gCZNVNzbHbfNHcHNgfCMLHHzPBDPvPDrlvDrDlvpmFTFBF
tsBQFgFpFBfsmtLjtgmtrQvCddSwSCwwbRvbwdLvwvRG
nqPZnMznTZHZlZPfGCHfbHwNVwdRwC
MPWqqzhZmBWFQfFW
FNMTTwqwNpVWPgZFFQ
crScdztJtcccSzWtzzzbStZQRZVVVHZVRgRQPHQhhjSZ
lCDCCdJJdbCdbcJzrcnrJWbnLLlvMMTLNwwMvfvwvMmNBNMG
WHsJMlBHCscDPDPtPBRDrL
jmTvgnqdsbPmSrrPVrwL
pdTgjgqbTqQFdjjQdqTZzCcJsZzQzcfsCCHMMl
QqMQGbMGGGzSsQSqCPcCPrCRNNlSZllc
vDHdmDWTdmwphhDdJwWvHdDCZPZVllPVRPRZNPVcZbTBZN
pmWHDmpmLgJvhvLpmvdvLWbsMgfsQGjqjtsnGfGqzGzzzQ
tFvMtFtFMvDDtMvLTpffQWWSGTsDTlSS
jqVnBjHqhPHbnhqPqWllfpfSTplQPQPGff
bbjHVHdjzqBznqVHBHzzqVFMJNMvmJtvtmcQFMZQFdJL
dcldCJQnldtTMdsccThhDDDDFhwTqDRwHR
ZbGzmgZSBpPPmmbNbZmgmNPPRqFzzVVhrwVHwRVHrVRHRRrR
bSSNmhPGWWZgQtLWtlCdJCMd
ttGBGNNgBgVBltlTJGJZpZlHSHCHfDSWpRWWpS
LhcLrcFFqdhLFLqvwMdhcPWpHHSSZWjjjCDwSSSfpWpD
fPMrqMMnqMFMbqcfnPMMBsgNttgggBmzJzbmGtbb
fjFhHHHmfjtLjrFmPhLbCdzBCpPCJQpJJGzJCp
RcDTnvlVqRnvnvRNcSzCJGJGCSJJCCdQqw
NTlMZVVlVVVlRTDTNjgGLfhrmgLFfZFGhr
GmbVGWttmpmbbqDWgVGGGtWNvNCCsHLLFsvHMHHLFnFn
wQQSdDTfSTsLCNnFwvFv
dPDBTBjzDftcBqBVbGBg
LmsfRLwCfZslcjljcjDjwN
gdRSrHHrSbdrggBzHBShHlqVvVDvcNvlcccjGlGjqB
zgTnSFFJdngddTZTPTWmspWQWWPR
RMZMtdsVCsRdddbsVcfcqgNfNDqGqGfzPzmf
BpwQrJvrjnSnQpBBBJCJjBBQlzvmDPzmDmglPzPgDNfNmNgz
LjLTnSpwjQTrnnLCBJLQjhstbMhsRtTdtMHMtbtsZd
PfrPHmrCRmRhcHCcmCfhhmWMLVpwVqFvvGGLVpQSwwSvSFFP
sJnjsgsDDdjjjdTglTgDBsBnSLdvwSqpQQbwQSLLLFSpQpbL
tBlngnqgqZggTZWfCRZmMCHHmM
LGGPQLDLPWmQLVdVdLLGbdvMNjfvHNFNNBbZnNMlHlBf
CshzsJBqTTwhttzCJzRtcNcMljnnnMjHlFnMcvnHfM
gqJsCwzBrQWDSgGmSS
FWVzVJjmbbJVpPwjjJDQsQNDgtcrWtddDQMg
TqRqCfGGBTzgTzDNNs
qRffnhhGvvvpwbvFzp
gLmMTpTCmRhgTLhCCZBSScJFQQQclWWMQJSJQW
rvfbDGjGssqbbrRSJJWclqcSwzwScc
PsDfGfVRjfTTTZNBPTZT
hWqrPzzMhrfmfdNtdZLNrnGndn
SwvwSFslbbjRsspQwsRwzcnbnNdTnZDbGctZdTNtNt
wvJJFsvpSSvJFjlHjzplQwJhCfVVhmBmVWhHWmWVWqBqMW
GjQtgjhPhGgsQjgtthrrvBlvljCrpCdlqBMb
RFDHDRFRczzlbqlbvqvHdb
DDFcRWTWFbSwRWbGtSGtgPfGGSPPtg`))